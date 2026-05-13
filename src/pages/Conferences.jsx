import { ArrowSquareOut, Calendar, Globe, MapPin } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { cvData } from '../data/cvData';

const ConferenceCard = ({ conf, index }) => {
    if (!conf) return null;

    const palettes = [
        { border: "border-amber-100", pill: "bg-amber-100/50 text-amber-700", icon: "bg-amber-50 text-amber-600", subtitle: "text-amber-600" },
        { border: "border-indigo-100", pill: "bg-indigo-100/50 text-indigo-700", icon: "bg-indigo-50 text-indigo-600", subtitle: "text-indigo-600" },
        { border: "border-purple-100", pill: "bg-purple-100/50 text-purple-700", icon: "bg-purple-50 text-purple-600", subtitle: "text-purple-600" },
    ];

    const theme = palettes[index % palettes.length];

    return (
        <article className={`relative flex flex-col bg-white border-2 ${theme.border} rounded-[2.5rem] p-6 md:p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 group`}>
            {/* TOP ROW: YEAR & ICON */}
            <div className="flex justify-between items-center mb-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.pill}`}>
                    {conf.year || '2023'}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${theme.icon}`}>
                    <Globe size={20} weight="bold" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    {conf.title}
                </h3>
                <div className={`text-[10px] font-black uppercase tracking-[0.15em] mb-3 ${theme.subtitle}`}>
                    {conf.subType || 'International Proceeding'}
                </div>
                <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
                    {conf.authors}
                </p>
            </div>

            {/* FOOTER: VENUE */}
            <div className="mt-5 pt-4 border-t border-slate-50 flex items-start gap-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${theme.icon}`}>
                    <MapPin size={14} weight="bold" />
                </div>
                <span className="text-[13px] font-bold text-slate-700 leading-snug">
                    {conf.venue}
                </span>
            </div>
        </article>
    );
};

export default function Conferences() {
    useEffect(() => {
        document.title = 'Conferences | Dr. Sumegh S. Tharewal';
        window.scrollTo(0, 0);
    }, []);

    const { conferences } = cvData;
    const international = (conferences || []).filter((c) => c.subType === 'International');
    const national = (conferences || []).filter((c) => c.subType === 'National');

    return (
        <div className="page-wrap bg-slate-50/20">
            <div className="container space-y-12 py-10">
                <header className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="glass-panel p-2 px-3 flex items-center gap-4 border border-slate-100 shadow-xl scale-95">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                                <Globe size={20} weight="duotone" />
                            </div>
                            <div className="text-left pr-3 border-l border-slate-100 pl-4">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Global Presence</div>
                                <div className="text-md font-black text-slate-900 tracking-tight">{conferences.length} Proceedings</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 items-start w-fit mx-auto">
                        <span className="section-kicker mx-auto">Scholarly Proceedings</span>
                        <h1 className="page-title text-4xl md:text-5xl font-black leading-tight tracking-tight">Research Dissemination</h1>
                        <p className="page-lead mx-auto max-w-2xl text-base text-slate-500 font-medium">Peer-reviewed conference proceedings presenting research at global academic forums.</p>
                    </div>
                </header>

                <section className="summary-band-compact conference-summary-strip">
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">International</span>
                        <strong className="text-3xl font-black text-amber-600 leading-none">{international.length}</strong>
                    </div>
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">National</span>
                        <strong className="text-3xl font-black text-slate-500 leading-none">{national.length}</strong>
                    </div>
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Total Coverage</span>
                        <strong className="text-3xl font-black text-slate-900 leading-none">{conferences.length}</strong>
                    </div>
                </section>

                <section className="section-shell">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
                        <SectionHeader title="International Proceedings" subtitle="Research shared across IEEE, Springer, and global venues." centered={false} />
                        <Link to="/archive?tab=conferences&filter=International" className="btn-secondary group shrink-0 btn-compact !text-base !px-5 text-slate-900 border-slate-200">
                            Full Registry <ArrowSquareOut size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {international.slice(0, 8).map((conf, index) => (
                            <ConferenceCard key={index} conf={conf} index={index} />
                        ))}
                    </div>
                </section>

                <section className="section-shell">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
                        <SectionHeader title="National Proceedings" subtitle="Contributions to national scholarly symposiums and forums." centered={false} />
                        <Link to="/archive?tab=conferences&filter=National" className="btn-secondary group shrink-0 btn-compact !text-base !px-5 text-slate-900 border-slate-200">
                            Full Registry <ArrowSquareOut size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {national.slice(0, 8).map((conf, index) => (
                            <ConferenceCard key={index} conf={conf} index={index} />
                        ))}
                    </div>
                </section>
                <section className="bg-transparent">
                    <div className="mx-auto w-max">
                        <div className="cta-banner relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-12 text-center shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all duration-500">
                            <div className="relative h-16 w-16 mx-auto mb-1">
                                <div className="absolute inset-0 animate-ping rounded-full bg-amber-500/20" />
                                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-amber-500 border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                    <Globe size={32} weight="fill" className="text-white" />
                                </div>
                            </div>

                            <div className="cta-layout">
                                <h4 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Bridging <span className="text-amber-400">theoretical research</span> with practical innovation.</h4>
                                <p className="mt-4 text-lg font-medium text-white/90">Empowering progress through global scholarly communities.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}
