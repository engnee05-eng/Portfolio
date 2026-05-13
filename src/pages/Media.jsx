import React, { useEffect, useState } from 'react';
import { ArrowSquareOut, LinkedinLogo, ImagesSquare } from '@phosphor-icons/react';
import SectionHeader from '../components/ui/SectionHeader';
import './Media.css';

const ACTIVITY_PAGE = 'https://www.linkedin.com/in/dr-sumegh-tharewal-phd-post-doc-smieee-30bb4767/recent-activity/images/';

const mediaImages = [
    { id: 'media-1', imageUrl: 'Media/AI SUBMIT 2026.png', title: 'AI Submit 2026' },
    { id: 'media-2', imageUrl: 'Media/image copy.png', title: 'Media image 2' },
    { id: 'media-3', imageUrl: 'Media/image copy 2.png', title: 'Media image 3' },
    { id: 'media-4', imageUrl: 'Media/image copy 3.png', title: 'Media image 4' },
    { id: 'media-5', imageUrl: 'Media/image copy 4.png', title: 'Media image 5' },
    { id: 'media-6', imageUrl: 'Media/image copy 5.png', title: 'Media image 6' },
    { id: 'media-7', imageUrl: 'Media/image copy 6.png', title: 'Media image 7' },
    { id: 'media-8', imageUrl: 'Media/image copy 7.png', title: 'Media image 8' },
    { id: 'media-9', imageUrl: 'Media/image copy 8.png', title: 'Media image 9' },
    { id: 'media-10', imageUrl: 'Media/image copy 9.png', title: 'Media image 10' },
    { id: 'media-11', imageUrl: 'Media/image copy 10.png', title: 'Media image 11' },
    { id: 'media-12', imageUrl: 'Media/image copy 11.png', title: 'Media image 12' },
    { id: 'media-13', imageUrl: 'Media/image copy 12.png', title: 'Media image 13' },
];

function MediaImage({ item, onOpen }) {
    const [hasError, setHasError] = useState(false);

    return (
        <button
            type="button"
            className="media-visual"
            onClick={() => {
                if (!hasError) onOpen(item);
            }}
            aria-label={`Open ${item.title}`}
        >
            {!hasError ? (
                <img
                    src={`${import.meta.env.BASE_URL}${item.imageUrl}`}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                        setHasError(true);
                    }}
                />
            ) : (
                <div className="media-visual-fallback" aria-label={`${item.title} preview unavailable`}>
                    <span className="media-fallback-copy">Image unavailable</span>
                </div>
            )}
        </button>
    );
}

export default function Media() {
    const [activeImage, setActiveImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        document.title = 'Media & Impact | Dr. Sumegh S. Tharewal';
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!activeImage) return undefined;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveImage(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage]);

    const handleViewMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <div className="page-wrap bg-slate-50/30">
            <div className="container space-y-2 py-6">
                <header className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="glass-panel p-2 px-3 flex items-center gap-4 border border-slate-100 shadow-xl scale-95">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                                <ImagesSquare size={20} weight="duotone" />
                            </div>
                            <div className="text-left pr-3 border-l border-slate-100 pl-4">
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Media Archive</div>
                                <div className="text-sm font-black text-slate-900 tracking-tight">{mediaImages.length} Images</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 items-start w-fit mx-auto">
                        <span className="section-kicker mx-auto">Visual Highlights</span>
                        <h1 className="page-title text-4xl md:text-5xl font-black tracking-tight">Media Gallery</h1>
                        <p className="page-lead mx-auto max-w-2xl text-base text-slate-500 font-medium">
                            A curated visual collection from talks, recognitions, academic events, and professional activity.
                        </p>
                    </div>
                </header>

                <section className="section-shell">
                    <div className="flex justify-end mt-2 mb-4">
                        <a href={ACTIVITY_PAGE} target="_blank" rel="noreferrer" className="btn-secondary group flex items-center gap-2">
                            <LinkedinLogo size={20} weight="bold" />
                            <span>View more</span>
                            <ArrowSquareOut size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="media-grid media-grid-images-only">
                        {mediaImages.slice(0, visibleCount).map((item) => (
                            <article key={item.id} className="media-card media-card-images-only overflow-hidden group">
                                <MediaImage item={item} onOpen={setActiveImage} />
                            </article>
                        ))}
                    </div>

                    {visibleCount < mediaImages.length && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={handleViewMore}
                                className="btn-secondary group flex items-center gap-2"
                            >
                                Show more images <ImagesSquare size={18} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {activeImage && (
                <div
                    className="media-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeImage.title}
                    onClick={() => setActiveImage(null)}
                >
                    <div className="media-lightbox-shell" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="media-lightbox-close"
                            onClick={() => setActiveImage(null)}
                            aria-label="Close image preview"
                        >
                            Exit
                        </button>
                        <div className="media-lightbox-frame">
                            <img
                                src={`${import.meta.env.BASE_URL}${activeImage.imageUrl}`}
                                alt={activeImage.title}
                                className="media-lightbox-image"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
