import { ArrowSquareOut, BookOpen, Globe, Cube, Eye, Image as ImageIcon, ChartBar, GraduationCap, Cpu } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { cvData } from '../data/cvData';

const PublicationCard = ({ pub, index }) => {
    if (!pub) return null;

    const palettes = [
        { border: "border-indigo-100", pill: "bg-indigo-100/50 text-indigo-700", icon: "bg-indigo-50 text-indigo-600", subtitle: "text-indigo-600", accent: "text-indigo-600" },
        { border: "border-purple-100", pill: "bg-purple-100/50 text-purple-700", icon: "bg-purple-50 text-purple-600", subtitle: "text-purple-600", accent: "text-purple-600" },
        { border: "border-cyan-100", pill: "bg-cyan-100/50 text-cyan-700", icon: "bg-cyan-50 text-cyan-600", subtitle: "text-cyan-600", accent: "text-cyan-600" },
    ];

    const theme = palettes[index % palettes.length];

    return (
        <article className={`relative flex flex-col bg-white border-2 ${theme.border} rounded-[2.5rem] p-6 md:p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 group`}>
            {/* TOP ROW: YEAR & ICON */}
            <div className="flex justify-between items-center mb-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.pill}`}>
                    {pub.year || '2023'}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${theme.icon}`}>
                    <BookOpen size={20} weight="bold" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    {pub.title}
                </h3>
                <div className={`text-[10px] font-black uppercase tracking-[0.15em] mb-3 ${theme.subtitle}`}>
                    {pub.subType || 'Journal Article'}
                </div>
                <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
                    {pub.authors}
                </p>
            </div>

            {/* FOOTER: JOURNAL */}
            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${theme.icon}`}>
                    <Globe size={14} weight="bold" />
                </div>
                <span className="text-[13px] font-bold text-slate-700">
                    {pub.journal || pub.venue}
                </span>
            </div>
        </article>
    );
};

export default function Publication() {
    useEffect(() => {
        document.title = 'Research & Publication | Dr. Sumegh S. Tharewal';
        window.scrollTo(0, 0);
    }, []);

    const { researchThemes } = cvData;
    const themeIcons = {
        "AI": Cpu,
        "Cube": Cube,
        "Eye": Eye,
        "Image": ImageIcon,
        "ChartBar": ChartBar,
        "GraduationCap": GraduationCap
    };

    const publications = cvData.publications || [];
    const books = cvData.books || [];

    return (
        <div className="page-wrap bg-slate-50/30">
            <div className="container space-y-12 py-10">
                <header className="max-w-4xl mx-auto text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="glass-panel p-2 px-3 flex items-center gap-4 border border-slate-100 shadow-xl scale-95">
                            <div className="flex -space-x-1">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)]" />
                                ))}
                            </div>
                            <div className="text-left pr-3 border-l border-slate-100 pl-4">
                                <div className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Scholarly Impact</div>
                                <div className="text-sm font-black text-slate-900 tracking-tight">746+ Citations</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 items-start w-fit mx-auto">
                        <span className="section-kicker mx-auto">Peer-Reviewed Corpus</span>
                        <h1 className="page-title text-4xl md:text-5xl font-black tracking-tight">Research & Publication</h1>
                        <p className="page-lead mx-auto max-w-2xl text-base text-slate-500 font-medium">A high-density archive of authored volumes and high-impact journal articles published globally.</p>
                    </div>
                </header>

                <section className="grid grid-cols-4 gap-4 w-full !flex-row publications-summary-grid">                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Published books</span>
                    <strong className="text-3xl font-black text-slate-900 leading-none">{books.length}</strong>
                </div>
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Journal papers</span>
                        <strong className="text-3xl font-black text-slate-900 leading-none">{publications.length}+</strong>
                    </div>
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Scholarly reach</span>
                        <strong className="text-3xl font-black text-[var(--accent)] leading-none">746+</strong>
                    </div>
                    <div className="card-modern p-5 flex flex-col justify-center text-center bg-white border border-slate-100 shadow-sm">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">ResearchGate Reads</span>
                        <strong className="text-3xl font-black text-[var(--accent)] leading-none">53k+</strong>
                    </div>
                </section>
                {/* RESEARCH AREAS SECTION */}
                <section className="section-shell">
                    <div className="mb-10 px-1 whitespace-nowrap">
                        <span className="section-kicker mx-auto">Research Areas</span>
                        <SectionHeader
                            title="Focused on Tech"
                            subtitle=" Researching advanced computing in security, automation, and AI decision-making."
                            centered={false} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchThemes.map((theme, idx) => {
                            const Icon = themeIcons[theme.icon] || Cpu;
                            const styles = [
                                {
                                    border: "border-violet-200",
                                    iconBg: "bg-violet-50",
                                    iconColor: "text-violet-600",
                                    badge: "bg-violet-50 text-violet-700 border-violet-100"
                                },
                                {
                                    border: "border-blue-200",
                                    iconBg: "bg-blue-50",
                                    iconColor: "text-blue-600",
                                    badge: "bg-blue-50 text-blue-700 border-blue-100"
                                },
                                {
                                    border: "border-rose-200",
                                    iconBg: "bg-rose-50",
                                    iconColor: "text-rose-600",
                                    badge: "bg-rose-50 text-rose-700 border-rose-100"
                                },
                                {
                                    border: "border-emerald-200",
                                    iconBg: "bg-emerald-50",
                                    iconColor: "text-emerald-600",
                                    badge: "bg-emerald-50 text-emerald-700 border-emerald-100"
                                },
                                {
                                    border: "border-sky-200",
                                    iconBg: "bg-sky-50",
                                    iconColor: "text-sky-600",
                                    badge: "bg-sky-50 text-sky-700 border-sky-100"
                                },
                                {
                                    border: "border-amber-200",
                                    iconBg: "bg-amber-50",
                                    iconColor: "text-amber-600",
                                    badge: "bg-amber-50 text-amber-700 border-amber-100"
                                }
                            ];

                            const style = styles[idx % styles.length];
                            return (
                                <div key={idx} className={`bg-white/90 backdrop-blur-md p-3 pl-6 rounded-[24px] border-2 ${style.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group`}>
                                    <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center ${style.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                                        {theme.icon === "AI" ? <span className="font-black text-xs">AI</span> : <Icon size={24} weight="bold" />}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{theme.title}</h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{theme.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {books.length > 0 && (
                    <section className="section-shell">
                        <div className="section-header-compact">
                            <SectionHeader title="Authored & Edited Books" subtitle="Published scholarly volumes covering CS foundations." centered={false} />
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                            {books.map((book, idx) => (
                                <a key={idx} href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="group block">
                                    <div className="aspect-[3/3.7] rounded-xl bg-white shadow-md overflow-hidden mb-3 group-hover:shadow-2xl transition-all border border-slate-100">
                                        {book.image ? (
                                            <img src={`${import.meta.env.BASE_URL}${book.image}`} alt={book.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                                <BookOpen size={24} weight="duotone" className="text-slate-300" />
                                            </div>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                )}
                <section className="section-shell">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
                        <SectionHeader title="Principal Journal Papers" subtitle="Peer-reviewed articles in high-impact journals." centered={false} />
                        <Link to="/archive?tab=journals" className="btn-secondary group shrink-0 btn-compact !text-base !px-5 text-slate-900 border-slate-200">
                            Full Journal Archive <ArrowSquareOut size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {publications.slice(0, 8).map((pub, idx) => (
                            <PublicationCard key={idx} pub={pub} index={idx} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
