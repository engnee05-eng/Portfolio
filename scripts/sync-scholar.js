import puppeteer from 'puppeteer';
import fs from 'fs';

const SCHOLAR_URL = 'https://scholar.google.co.in/citations?user=1dfdWf8AAAAJ&hl=en';
const DATA_FILE = './src/data/cvData.js';

async function syncScholar() {
    console.log('🚀 Starting Google Scholar Sync...');
    
    const browser = await puppeteer.launch({ 
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
        console.log(`📡 Navigating to Scholar Profile: ${SCHOLAR_URL}`);
        await page.goto(SCHOLAR_URL, { waitUntil: 'networkidle2' });

        // Extract Stats
        console.log('🕵️  Extracting citation statistics...');
        const stats = await page.evaluate(() => {
            const rows = document.querySelectorAll('#gsc_rsb_st tr');
            const data = {};
            rows.forEach(row => {
                const label = row.querySelector('.gsc_rsb_f')?.innerText;
                const value = row.querySelector('.gsc_rsb_std')?.innerText;
                if (label && value) {
                    data[label.toLowerCase()] = value;
                }
            });
            return data;
        });

        // Extract Top Publications
        console.log('🕵️  Extracting top publications...');
        const publications = await page.evaluate(() => {
            const rows = document.querySelectorAll('#gsc_a_b .gsc_a_tr');
            return Array.from(rows).slice(0, 15).map(row => ({
                title: row.querySelector('.gsc_a_at')?.innerText,
                authors: row.querySelector('.gs_gray:nth-of-type(1)')?.innerText,
                journal: row.querySelector('.gs_gray:nth-of-type(2)')?.innerText,
                year: row.querySelector('.gsc_a_y')?.innerText,
                citations: row.querySelector('.gsc_a_ac')?.innerText || "0",
                subType: "Journal"
            }));
        });

        if (!stats.citations) {
            throw new Error('Could not find citation data. Google might be blocking or layout changed.');
        }

        console.log('📝 Reading existing cvData.js...');
        let cvDataContent = fs.readFileSync(DATA_FILE, 'utf8');

        // Update heroStats values
        console.log('Updating stats in memory...');
        cvDataContent = cvDataContent.replace(/(label: "Citations", value: ")([^"]*)(")/, `$1${stats.citations}$3`);
        cvDataContent = cvDataContent.replace(/(label: "h-index", value: ")([^"]*)(")/, `$1${stats['h-index']}$3`);
        cvDataContent = cvDataContent.replace(/(label: "i10-index", value: ")([^"]*)(")/, `$1${stats['i10-index']}$3`);
        
        // Also update nested heroStats values if they exist
        cvDataContent = cvDataContent.replace(/({ value: ")([^"]*)(", label: "Citations" })/, `$1${stats.citations}$3`);
        cvDataContent = cvDataContent.replace(/({ value: ")([^"]*)(", label: "H-Index" })/, `$1${stats['h-index']}$3`);
        cvDataContent = cvDataContent.replace(/({ value: ")([^"]*)(", label: "i10-Index" })/, `$1${stats['i10-index']}$3`);

        // Update publications list (Advanced: replace the array)
        const pubStart = cvDataContent.indexOf('publications: [');
        const pubEnd = cvDataContent.indexOf('],', pubStart) + 2;
        
        if (pubStart !== -1 && pubEnd !== -1) {
            const newPubsStr = `publications: ${JSON.stringify(publications, null, 8)},\n`;
            cvDataContent = cvDataContent.substring(0, pubStart) + newPubsStr + cvDataContent.substring(pubEnd);
        }

        fs.writeFileSync(DATA_FILE, cvDataContent);
        console.log(`✅ Successfully updated ${DATA_FILE} with latest citation data and top 15 publications.`);

    } catch (error) {
        console.error('❌ Error during Scholar sync:', error);
    } finally {
        await browser.close();
        console.log('🏁 Sync complete.');
    }
}

syncScholar();
