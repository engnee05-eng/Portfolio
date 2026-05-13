import { useEffect, useMemo } from 'react';
import { ArrowLeft, BookOpen, Globe, Star, Tag, Shield, FileText, Calendar, GlobeHemisphereWest } from '@phosphor-icons/react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { cvData } from '../data/cvData';

/* ---------------- HONORS CARD (PATENT STYLE) ---------------- */
const HonorsCard = ({ award, index }) => (
    <article className="card-scientific flex h-full flex-col p-5 group">
        <div className="flex justify-between items-start mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600">
                <Star size={22} weight="duotone" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2rem] text-slate-400">
                HN-{String(index + 1).padStart(2, '0')}
            </span>
        </div>
        <div className="flex-1">
            <h3 className="text-[1.12rem] font-black leading-tight group-hover:text-[var(--accent)] transition-colors">
                {award.title}
            </h3>
            <div className="mt-3.5 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--accent-soft)] border border-[var(--accent-secondary)]/10 shadow-sm">
                <Shield size={11} weight="fill" className="text-[var(--accent)]" />
                <span className="text-[10px] font-black font-mono text-[var(--accent)] tracking-wider uppercase">
                    Recognized Institution
                </span>
            </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <GlobeHemisphereWest size={15} className="text-[var(--text-muted)]" />
                <span className="text-[11px] font-semibold text-[var(--text-secondary)]">Institutional Honor</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[var(--text-muted)]" />
                <span className="text-[11px] font-semibold text-[var(--text-secondary)]">{award.year}</span>
            </div>
        </div>
    </article>
);

/* ---------------- RESEARCH CARD (HOME PROJECT STYLE) ---------------- */
const ResearchCard = ({ item, type }) => {
    const scholarSearch = `https://scholar.google.com/scholar?q=${encodeURIComponent(item.title)}`;

    return (
        <a
            href={scholarSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="card-modern p-5 flex flex-col h-full group cursor-pointer hover:border-[var(--accent)]/30 transition-all no-underline"
        >
            <div className="flex items-center justify-between gap-4 mb-6">
                <span className={`status-pill ${type === 'Journal' ? 'active' : (item.subType === 'National' ? 'archived !text-slate-500 !bg-slate-100 !border-slate-200' : 'archived')}`}>
                    {type === 'Journal' ? 'Scholarly Journal' : (`${item.subType || 'International'} Proceeding`)}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
                    {item.year}
                </span>
            </div>

            <h3 className="text-[1.28rem] font-black pb-2.5 leading-snug group-hover:text-[var(--accent)] transition-colors italic">
                "{item.title}"
            </h3>

            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                {item.authors}
            </p>

            <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="tech-pill px-4 py-2 text-sm font-bold bg-slate-50 border-slate-100 italic max-w-full">
                    {item.journal || item.venue}
                </span>
                {item.citations > 0 && (
                    <span className="tech-pill px-4 py-2 text-[10px] font-bold bg-amber-50 border-amber-100 text-amber-600">
                        {item.citations} Citations
                    </span>
                )}
            </div>
        </a>
    );
};

export default function Archive() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'journals';

    useEffect(() => {
        document.title = 'Academic Archive | Dr. Sumegh S. Tharewal';
        window.scrollTo(0, 0);
    }, []);

    const { publications, conferences, awards } = cvData;

    const data = useMemo(() => {
        let results = [];
        if (currentTab === 'journals') results = publications.map(p => ({ ...p, type: 'Journal' }));
        else if (currentTab === 'conferences') results = conferences.map(c => ({ ...c, type: 'Conference' }));
        else if (currentTab === 'awards') results = awards.map(a => ({ ...a, type: 'Award' }));

        const filterParam = searchParams.get('filter');
        if (filterParam) {
            results = results.filter(item =>
                String(item.subType).toLowerCase() === filterParam.toLowerCase() ||
                String(item.type).toLowerCase() === filterParam.toLowerCase()
            );
        }
        return results;
    }, [currentTab, publications, conferences, awards, searchParams]);

    const tabs = [
        { id: 'journals', label: 'Journal Articles', count: publications.length, icon: <BookOpen size={16} /> },
        { id: 'conferences', label: 'Conference Papers', count: conferences.length, icon: <Globe size={16} /> },
        { id: 'awards', label: 'Honors & Recognition', count: awards.length, icon: <Star size={16} /> }
    ];

    return (
        <div className="min-h-screen bg-slate-50/30">
            {/* ---------- CTA-STYLE HERO ---------- */}
            <header className="pt-10 pb-12">
                <div className="container">
                    <div className="cta-banner">
                        <span className="section-kicker">Comprehensive Ledger</span>
                        <div className="cta-layout mt-1">
                            <div className="cta-copy">
                                <h1 className="text-3xl md:text-[2.2rem] font-black tracking-tight leading-none text-white">
                                    Scholarly Contributions
                                </h1>
                                <p className="text-white/60 mt-4 max-w-none text-sm md:text-base leading-relaxed font-medium">
                                    The exhaustive record of global academic contributions, including indexed journals, international proceedings, and career distinctions.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                {(currentTab === 'journals' || currentTab === 'conferences') && (
                                    <a
                                        href={cvData.personalInfo.googleScholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="section-kicker btn-compact !bg-emerald-600 hover:!bg-emerald-700 !text-white flex items-center gap-2"
                                    >
                                        <Globe size={18} weight="bold" /> Verify on Scholar
                                    </a>
                                )}
                                <button
                                    onClick={() => navigate(-1)}
                                    className="section-kicker btn-compact cta-button border-none cursor-pointer"
                                >
                                    <ArrowLeft size={18} weight="bold" /> Return
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ---------- TABS ---------- */}
            {!searchParams.get('isolate') && (
                <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 shadow-sm">
                    <div className="container">
                        <nav className="flex gap-1 overflow-x-auto no-scrollbar">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSearchParams({ tab: tab.id }, { replace: true })}
                                    className={`flex items-center gap-3 px-8 py-5 border-b-2 transition-all whitespace-nowrap group ${currentTab === tab.id
                                        ? 'border-[var(--accent)] text-slate-900 bg-slate-50/50'
                                        : 'border-transparent text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <span className={`p-1.5 rounded-lg transition-colors ${currentTab === tab.id ? 'bg-[var(--accent)] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                        {tab.icon}
                                    </span>
                                    <span className="text-[11px] font-black uppercase tracking-widest">{tab.label}</span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${currentTab === tab.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                        {tab.count}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* ---------- GRID ---------- */}
            <main className="container py-16">
                <div className={`grid gap-8 ${currentTab === 'awards' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'}`}>
                    {data.map((item, idx) => (
                        currentTab === 'awards'
                            ? <HonorsCard key={idx} award={item} index={idx} />
                            : <ResearchCard key={idx} item={item} type={item.type} />
                    ))}
                </div>

                {data.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <Tag size={40} className="mx-auto text-slate-200 mb-3" />
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest">No archival records available</p>
                    </div>
                )}
            </main>
        </div>
    );
}
