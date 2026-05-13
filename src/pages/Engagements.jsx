import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
    MicrophoneStage, ChalkboardTeacher, ArrowLeft, ArrowRight,
    Calendar, Bank, MapPin, Presentation, UserFocus, BookOpen, Star, Tag, Rocket,
    Buildings, Handshake, Lightbulb, Globe, ShieldCheck, Certificate
} from '@phosphor-icons/react';
import { cvData } from '../data/cvData';

const EngagementCard = ({ item, type, index }) => {
    const isKeynote = type === 'keynote';
    const isResource = type === 'resource';
    const isChair = type === 'chair';
    const isReviewer = type === 'reviewer';
    const isInitiative = type === 'initiative';

    const palettes = [
        { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', icon: MicrophoneStage, pill: 'bg-indigo-100/50 text-indigo-700', color: "border-indigo-100 hover:border-indigo-200" },
        { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', icon: ChalkboardTeacher, pill: 'bg-emerald-100/50 text-emerald-700', color: "border-emerald-100 hover:border-emerald-200" },
        { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', icon: UserFocus, pill: 'bg-amber-100/50 text-amber-700', color: "border-amber-100 hover:border-amber-200" },
        { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', icon: BookOpen, pill: 'bg-rose-100/50 text-rose-700', color: "border-rose-100 hover:border-rose-200" },
        { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', icon: Rocket, pill: 'bg-violet-100/50 text-violet-700', color: "border-violet-100 hover:border-violet-200" },
        { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', icon: Bank, pill: 'bg-blue-100/50 text-blue-700', color: "border-blue-100 hover:border-blue-200" },
        { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', icon: Lightbulb, pill: 'bg-cyan-100/50 text-cyan-700', color: "border-cyan-100 hover:border-cyan-200" },
        { bg: 'bg-sky-50', text: 'text-sky-600', border: 'sky-border-100', icon: Globe, pill: 'bg-sky-100/50 text-sky-700', color: "border-sky-100 hover:border-sky-200" }
    ];

    const palette = palettes[index % palettes.length];
    const initIcons = [Bank, Presentation, ShieldCheck, ChalkboardTeacher, Buildings, Handshake, Lightbulb, Globe];
    const Icon = isKeynote ? MicrophoneStage : isResource ? ChalkboardTeacher : isChair ? UserFocus : isInitiative ? (initIcons[index % initIcons.length] || Rocket) : BookOpen;

    if (isInitiative) {
        return (
            <article className={`relative overflow-hidden rounded-[28px] bg-white border-2 ${palette.color} shadow-[0_12px_35px_rgba(15,23,42,0.06)] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(99,102,241,0.15)] group h-full`}>
                <div className={`absolute inset-x-0 top-0 h-[5px] ${palette.text.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`w-16 h-16 rounded-2xl ${palette.bg} flex items-center justify-center ${palette.text} shadow-sm mb-6 transition-all duration-500 group-hover:scale-110`}>
                    <Icon size={28} weight="bold" />
                </div>
                <h3 className="text-[1.25rem] font-black text-slate-900 leading-tight mb-4 tracking-tight drop-shadow-sm min-h-[50px] flex items-center justify-center">
                    {item.title}
                </h3>
                <p className="text-[15px] text-slate-600 font-medium leading-relaxed mt-auto">
                    {item.description}
                </p>
            </article>
        );
    }

    return (
        <article className={`relative flex flex-col bg-white border-2 ${palette.border} rounded-[2.5rem] p-7 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 group h-full`}>
            {/* TOP ROW: DATE/CATEGORY & ICON */}
            <div className="flex justify-between items-center mb-6">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${palette.pill}`}>
                    {item.date || item.publisher || 'Strategic Project'}
                </span>
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${palette.bg} ${palette.text}`}>
                    <Icon size={22} weight="bold" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                <h3 className="text-xl md:text-xl font-black text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
                    {isReviewer ? item.journal : (item.event || item.title)}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                    <div className={`w-1.5 h-1.5 rounded-full ${palette.text.replace('text-', 'bg-')}`}></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 pt-2">
                        {isKeynote ? 'Keynote Speaker' : isResource ? 'Resource Person' : isChair ? 'Session Chair' : isReviewer ? 'Journal Reviewer' : 'Key Initiative'}
                    </span>
                </div>

                {(item.institution || item.description) && (
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-6">
                        {item.institution || item.description}
                    </p>
                )}

                {isReviewer && item.meta && (
                    <p className="text-slate-400 text-xs font-bold italic mb-6">
                        {item.meta}
                    </p>
                )}
            </div>

            {/* TOPIC BADGE FOR KEYNOTE/RESOURCE */}
            {item.topic && (
                <div className="mt-4 pt-5 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${palette.bg} ${palette.text}`}>
                            <Presentation size={16} weight="bold" />
                        </div>
                        <span className="text-[13px] font-bold text-slate-700 italic leading-snug">
                            "{item.topic}"
                        </span>
                    </div>
                </div>
            )}

            {/* ACTION FOOTER */}
            {item.link && (
                <div className="mt-6 pt-5 border-t border-slate-50 flex justify-end">
                    <a href={item.link} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest ${palette.text} hover:opacity-70 transition-all`}>
                        Verify Contribution <ArrowRight size={16} weight="bold" />
                    </a>
                </div>
            )}
        </article>
    );
};

const Engagements = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'keynote';

    useEffect(() => {
        document.title = 'Professional Engagements | Dr. Sumegh S. Tharewal';
        window.scrollTo(0, 0);
    }, []);

    const { keynoteSpeaker, resourcePerson, sessionChair, journalReviewer } = cvData.mentorship.engagements;
    const { initiatives } = cvData.mentorship;

    const tabs = [
        { id: 'keynote', label: 'Keynote Speaker', count: keynoteSpeaker.length, icon: <MicrophoneStage size={16} /> },
        { id: 'resource', label: 'Resource Person', count: resourcePerson.length, icon: <ChalkboardTeacher size={16} /> },
        { id: 'chair', label: 'Session Chair', count: sessionChair.length, icon: <UserFocus size={16} /> },
        { id: 'reviewer', label: 'Journal Reviewer', count: journalReviewer.length, icon: <BookOpen size={16} /> },
        { id: 'initiatives', label: 'Key Initiatives', count: initiatives.length, icon: <Rocket size={16} /> }
    ];

    const displayData = useMemo(() => {
        if (currentTab === 'keynote') return keynoteSpeaker.map(i => ({ ...i, type: 'keynote' }));
        if (currentTab === 'resource') return resourcePerson.map(i => ({ ...i, type: 'resource' }));
        if (currentTab === 'chair') return sessionChair.map(i => ({ ...i, type: 'chair' }));
        if (currentTab === 'reviewer') return journalReviewer.map(i => ({ ...i, type: 'reviewer' }));
        if (currentTab === 'initiatives') return initiatives.map(i => ({ ...i, type: 'initiative' }));
        return [];
    }, [currentTab, keynoteSpeaker, resourcePerson, sessionChair, journalReviewer, initiatives]);

    return (
        <div className="min-h-screen bg-slate-50/30 mt-20">
            {/* Header Section (Archive.jsx Style) */}
            <header className="pt-3 pb-5">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-layout mt-1">
                            <div className="cta-copy">
                                <h1 className="text-2xl md:text-[2rem] font-black tracking-tight leading-none text-white">
                                    Global Engagements
                                </h1>
                                <p className="text-white/70 mt-2 max-w-full text-sm md:text-[16px] leading-normal font-medium whitespace-nowrap">
                                    The exhaustive record of keynote speeches, expert sessions, session chairing, and journal reviewer roles delivered across global platforms.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    onClick={() => navigate('/academics')}
                                    className="section-kicker btn-compact cta-button border-none cursor-pointer"
                                >
                                    <ArrowLeft size={18} weight="bold" /> Return
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Tabs Section */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 shadow-sm">
                <div className="container">
                    <nav className="flex justify-between w-full">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setSearchParams({ tab: tab.id }, { replace: true })}
                                className={`flex items-center gap-2.5 px-4 md:px-6 py-5 border-b-2 transition-all whitespace-nowrap group flex-1 justify-center ${currentTab === tab.id
                                    ? 'border-indigo-600 text-slate-900 bg-slate-50/50'
                                    : 'border-transparent text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <span className={`p-1.5 rounded-lg transition-colors ${currentTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
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

            {/* Grid Section */}
            <main className="container py-16">
                <div className={`grid gap-8 ${currentTab === 'initiatives' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'}`}>
                    {displayData.map((item, idx) => (
                        <EngagementCard key={idx} item={item} type={item.type} index={idx} />
                    ))}
                </div>

                {displayData.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                        <Tag size={40} className="mx-auto text-slate-200 mb-3" />
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest">No records found in this category</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Engagements;
