/* global process, Buffer */
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const PROFILE_URL = 'https://www.linkedin.com/in/dr-sumegh-tharewal-phd-post-doc-smieee-30bb4767/recent-activity/images/';
const DATA_FILE = './src/data/mediaData.js';
const MEDIA_DIR = './public/linkedin-media';
const SESSION_DIR = './.cache/linkedin-session';
const MAX_POSTS = Number(process.env.LINKEDIN_MAX_POSTS || 100);
const KEEP_OPEN = process.env.LINKEDIN_KEEP_OPEN !== 'false';
const BROWSER_CANDIDATES = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function findBrowser() {
    return BROWSER_CANDIDATES.find((candidate) => fs.existsSync(candidate));
}

function sanitizeFilePart(value = '') {
    return (
        value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 48) || 'item'
    );
}

function compactText(value = '', limit = 88, fallback = 'LinkedIn update') {
    const cleaned = value.replace(/\s+/g, ' ').trim();
    if (!cleaned) return fallback;
    return cleaned.length > limit ? `${cleaned.slice(0, limit - 3).trim()}...` : cleaned;
}

function compactSentence(value = '', fallback = 'Recent update.') {
    const cleaned = value.replace(/\s+/g, ' ').trim();
    if (!cleaned) return fallback;

    const firstSentence = cleaned.split(/[.!?]/)[0]?.trim() || cleaned;
    const short = compactText(firstSentence, 72, fallback.replace(/\.$/, ''));
    return short.endsWith('.') ? short : `${short}.`;
}

function detectExtension(url = '', contentType = '') {
    if (contentType.includes('png')) return 'png';
    if (contentType.includes('webp')) return 'webp';
    if (contentType.includes('gif')) return 'gif';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) return 'jpg';

    const pathname = url.split('?')[0];
    const extension = pathname.split('.').pop()?.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(extension)
        ? extension.replace('jpeg', 'jpg')
        : 'jpg';
}

async function autoScroll(page) {
    let previousCount = 0;
    let stablePasses = 0;

    for (let step = 0; step < 40; step += 1) {
        const cardCount = await page.evaluate(
            () => document.querySelectorAll('.feed-shared-update-v2, .occludable-update, [data-urn*="activity"]').length
        );

        if (cardCount === previousCount) {
            stablePasses += 1;
            if (stablePasses >= 3) break;
        } else {
            stablePasses = 0;
            previousCount = cardCount;
        }

        await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.25));
        await sleep(1800);
    }

    await page.evaluate(() => window.scrollTo(0, 0));
}

async function waitForLoginIfNeeded(page) {
    const url = page.url();
    if (!url.includes('/login') && !url.includes('/checkpoint')) {
        return false;
    }

    console.log('LinkedIn login required. Complete login in the browser, then wait for the activity page to load.');
    await page.bringToFront();

    for (let attempt = 0; attempt < 120; attempt += 1) {
        await sleep(2000);
        const current = page.url();
        if (!current.includes('/login') && !current.includes('/checkpoint')) {
            return true;
        }
    }

    throw new Error('Timed out waiting for LinkedIn login.');
}

async function pauseForInspection(page, message) {
    if (!KEEP_OPEN) return;

    console.log(message);
    await page.bringToFront();

    for (;;) {
        await sleep(60000);
    }
}

async function downloadMediaAsset(page, url, fileStem) {
    const result = await page.evaluate(async (sourceUrl) => {
        try {
            const response = await fetch(sourceUrl, { credentials: 'include' });
            if (!response.ok) {
                return { ok: false, status: response.status };
            }

            const contentType = response.headers.get('content-type') || '';
            const buffer = await response.arrayBuffer();
            const bytes = Array.from(new Uint8Array(buffer));

            return {
                ok: true,
                contentType,
                bytes,
            };
        } catch (error) {
            return { ok: false, error: String(error) };
        }
    }, url);

    if (!result?.ok || !result.bytes?.length) {
        return null;
    }

    fs.mkdirSync(MEDIA_DIR, { recursive: true });

    const extension = detectExtension(url, result.contentType);
    const fileName = `${fileStem}.${extension}`;
    const filePath = path.join(MEDIA_DIR, fileName);
    fs.writeFileSync(filePath, Buffer.from(result.bytes));

    return `/linkedin-media/${fileName}`;
}

async function extractPosts(page, maxPosts) {
    return page.evaluate((maxPosts) => {
        const textFrom = (node, selectors) => {
            for (const selector of selectors) {
                const matches = [...node.querySelectorAll(selector)];
                for (const match of matches) {
                    const text = match?.textContent?.replace(/\s+/g, ' ').trim();
                    if (text) return text;
                }
            }
            return '';
        };

        const imageFrom = (node) => {
            const matches = [
                ...node.querySelectorAll(
                    '.update-components-image__container img, .feed-shared-image img, .update-components-linkedin-video__thumbnail-image, img'
                ),
            ];

            for (const match of matches) {
                const candidates = [
                    match.currentSrc,
                    match.src,
                    match.getAttribute('src'),
                    match.getAttribute('data-delayed-url'),
                ].filter(Boolean);

                const usable = candidates.find(
                    (value) =>
                        !value.startsWith('data:image') &&
                        !value.includes('/profile-displayphoto-') &&
                        !value.includes('/profile-framedphoto-') &&
                        !value.includes('/company-logo_')
                );

                if (usable) return usable;
            }

            return '';
        };

        const linkFrom = (node) => {
            const anchors = [
                ...node.querySelectorAll('a[href*="/feed/update/"], a[href*="/posts/"], a[href*="/activity/"]'),
            ];

            for (const anchor of anchors) {
                const href = anchor.href || anchor.getAttribute('href');
                if (!href) continue;
                return href.startsWith('http') ? href : new URL(href, window.location.origin).href;
            }

            const urn = node.getAttribute('data-urn') || node.closest('[data-urn]')?.getAttribute('data-urn');
            return urn ? `https://www.linkedin.com/feed/update/${urn}/` : window.location.href;
        };

        const cards = [
            ...document.querySelectorAll('.feed-shared-update-v2, .occludable-update, [data-urn*="activity"]'),
        ];

        const unique = new Map();

        cards.forEach((card, index) => {
            const root = card.closest('.feed-shared-update-v2, .occludable-update, [data-urn*="activity"]') || card;
            const titleSource = textFrom(root, [
                '.update-components-text span[dir="ltr"]',
                '.feed-shared-inline-show-more-text span[dir="ltr"]',
                '.feed-shared-update-v2__description-wrapper',
                '.break-words',
            ]);
            const imageUrl = imageFrom(root);
            const link = linkFrom(root);
            const date = textFrom(root, [
                '.update-components-actor__sub-description span[aria-hidden="true"]',
                '.update-components-actor__sub-description',
                'time',
            ]) || 'Recent';

            if (!titleSource || !imageUrl || unique.has(link)) return;

            unique.set(link, {
                id: `li-${index + 1}`,
                date: date.split('•')[0].trim(),
                title: titleSource,
                category: 'LinkedIn',
                description: titleSource,
                imageUrl,
                mediaType: 'image',
                link,
                tags: ['LinkedIn', 'Post'],
            });
        });

        return [...unique.values()].slice(0, maxPosts);
    }, maxPosts);
}

async function syncLinkedIn() {
    console.log('Starting LinkedIn sync...');

    const executablePath = findBrowser();
    if (!executablePath) {
        throw new Error('Chrome or Edge was not found on this machine.');
    }

    const browser = await puppeteer.launch({
        headless: false,
        executablePath,
        userDataDir: SESSION_DIR,
        args: ['--start-maximized', '--no-sandbox'],
        defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    );

    let shouldCloseBrowser = !KEEP_OPEN;

    try {
        console.log(`Opening ${PROFILE_URL}`);
        await page.goto(PROFILE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await sleep(4000);

        const loggedInDuringRun = await waitForLoginIfNeeded(page);
        if (loggedInDuringRun) {
            await page.goto(PROFILE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
            await sleep(4000);
        }

        await autoScroll(page);

        console.log('Extracting posts...');
        const posts = await extractPosts(page, MAX_POSTS);

        if (!posts.length) {
            await pauseForInspection(
                page,
                'No LinkedIn image posts were found. Browser left open for inspection. Close it manually after checking the page.'
            );
            return;
        }

        const finalData = [];

        for (const [index, post] of posts.entries()) {
            const localImage = await downloadMediaAsset(
                page,
                post.imageUrl,
                `${String(index + 1).padStart(3, '0')}-${sanitizeFilePart(post.title)}`
            );

            if (!localImage) continue;

            finalData.push({
                ...post,
                title: compactText(post.title),
                description: compactSentence(post.description),
                imageUrl: localImage,
            });
        }

        if (!finalData.length) {
            await pauseForInspection(
                page,
                'Posts were detected, but image downloads were blocked. Browser left open for inspection. Close it manually after checking the page.'
            );
            return;
        }

        fs.writeFileSync(DATA_FILE, `export const mediaData = ${JSON.stringify(finalData, null, 4)};\n`);
        console.log(`Saved ${finalData.length} posts to ${DATA_FILE}.`);
        shouldCloseBrowser = true;
    } finally {
        if (shouldCloseBrowser) {
            await browser.close();
            console.log('Done.');
        }
    }
}

syncLinkedIn().catch((error) => {
    console.error('ERROR:', error.message);
    process.exitCode = 1;
});
