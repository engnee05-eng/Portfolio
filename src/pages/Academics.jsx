import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ChalkboardTeacher, Bank, Cube, UsersThree, PresentationChart,
    GlobeHemisphereWest, Medal, BookOpen, ShareNetwork, ChartBar,
    Globe, Trophy, ShieldCheck, Fingerprint, Cpu, Brain,
    Heartbeat, CheckCircle, Presentation, Lightbulb, Handshake,
    Certificate, ArrowRight, GraduationCap, IdentificationCard,
    Rocket, Users, Lightning, Shield, Microscope, Target,
    Buildings, Bookmark, Code, Student, MicrophoneStage, UserFocus
} from '@phosphor-icons/react';
import { cvData } from '../data/cvData';

const SectionHeader = ({ title, subtitle, centered = false }) => (
    <div className={`space-y-2 ${centered ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl font-black text-[#1e1b4b] tracking-tight">{title}</h2>
        <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-3xl">{subtitle}</p>
        <div className={`h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
);

const Academics = () => {
    const { mentorship } = cvData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const domainIcons = [Brain, Cube, Heartbeat, Bank, Fingerprint, Cpu];
    const philosophyCards = [
        { icon: Target, verb: "Inspire", trait: "Curiosity", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Lightning, verb: "Encourage", trait: "Innovation", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: ShieldCheck, verb: "Promote", trait: "Integrity", color: "text-indigo-600", bg: "bg-indigo-50" },
        { icon: Heartbeat, verb: "Create", trait: "Impact", color: "text-rose-600", bg: "bg-rose-50" }
    ];

    const curriculumData = [
        {
            degree: "M.Sc. Blockchain Technology",
            subjects: ["Blockchain Ecosystem", "Advanced Data Structures", "Blockchain Architecture", "Network Security", "API Interfacing"],
            icon: ShareNetwork,
            color: "border-purple-200 hover:border-purple-400",
            iconBg: "bg-purple-600",
            iconText: "text-white",
            glow: "shadow-purple-500/5"
        },
        {
            degree: "M.Sc. Digital Cyber Forensics",
            subjects: ["Python", "MATLAB", "Research Methodology", "Biometrics"],
            icon: ShieldCheck,
            color: "border-blue-200 hover:border-blue-400",
            iconBg: "bg-blue-500",
            iconText: "text-white",
            glow: "shadow-blue-500/5"
        },
        {
            degree: "M.C.A",
            subjects: ["Machine Learning", "Artificial Intelligence", "Digital Image Processing", "Operating System", "Computer Networks"],
            icon: Cpu,
            color: "border-emerald-200 hover:border-emerald-400",
            iconBg: "bg-emerald-500",
            iconText: "text-white",
            glow: "shadow-emerald-500/5"
        },
        {
            degree: "Undergraduate (BCA/B.Sc)",
            subjects: ["Fog Computing", "Software Engineering", "Computational Thinking", "UML", "C/C++", "Python"],
            icon: Code,
            color: "border-amber-200 hover:border-amber-400",
            iconBg: "bg-amber-500",
            iconText: "text-white",
            glow: "shadow-amber-500/5"
        }
    ];

    const scholarlyGuidance = [
        {
            title: "PhD Researchers",
            metric: "8 DOCTORAL SCHOLARS",
            meta: "PHD LEVEL",
            icon: GraduationCap,
            highlight: true
        },
        {
            title: "Postgraduate Research",
            metric: "50+ MASTER'S RESEARCHERS",
            meta: "GRADUATE",
            icon: BookOpen,
            highlight: false
        },
        {
            title: "Student Innovation",
            metric: "100+ CAPSTONE PROJECTS",
            meta: "UNDERGRAD",
            icon: PresentationChart,
            highlight: false
        }
    ];

    return (
        <div className="page-wrap bg-bg-[linear-gradient(to_bottom,#f8faff_0%,#ffffff_35%,#f6f3ff_100%)] overflow-hidden">
            <div className="container space-y-4 py-6">

                {/* 1. HERO SECTION */}
                <header className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
                    <div className="relative z-10">
                        <div className="flex justify-center">
                            <div className="glass-panel p-2 px-3 flex items-center gap-4 border border-slate-100 shadow-xl scale-95">
                                <div className="flex -space-x-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-purple-500" />
                                    ))}
                                </div>
                                <div className="text-left pr-3 border-l border-slate-100 pl-4">
                                    <div className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Academic Impact</div>
                                    <div className="text-sm font-black text-slate-900 tracking-tight">Mentorship & Leadership</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-black tracking-[-0.05em] text-[#1e1b4b] leading-none">
                            Guiding minds. <span className="bg-gradient-to-r from-indigo-700 via-violet-500 to-cyan-500 bg-clip-text text-transparent">Building impact.</span>
                        </h1>
                        <p className="page-lead text-[16px] text-slate-500 font-medium leading-relaxed">
                            Committed to mentoring the next generation of researchers, innovators, and leaders through teaching excellence, research guidance, and leadership in academic and industry collaborations.
                        </p>
                    </div>
                </header>

                {/* 2. IMPACT METRICS STRIP (IMAGE 1) */}
                <section className="section-shell animate-fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { label: "Years of Teaching", value: "15+", icon: ChalkboardTeacher },
                            { label: "Leadership Roles", value: "8+", icon: Bank },
                            { label: "Research Projects", value: "50+", icon: Cube },
                            { label: "Student Mentored", value: "100+", icon: UsersThree },
                            { label: "Workshops & FDPs", value: "30+", icon: PresentationChart },
                            { label: "International Collaborations", value: "15+", icon: GlobeHemisphereWest }
                        ].map((metric, idx) => (
                            <div key={idx} className="bg-white/85 backdrop-blur-md px-4 py-3.5 rounded-[24px] border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.05)] flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.10)] transition-all duration-500">
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-indigo-700 mb-1 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <metric.icon size={26} weight="duotone" />
                                </div>
                                <div className="text-3xl font-black text-[#1e1b4b] leading-none mb-1.5">{metric.value}</div>
                                <div className="text-[12px] font-black text-slate-600 uppercase tracking-[0.15em] leading-tight px-2">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. SCHOLARLY GUIDANCE (IMAGE 2) */}
                <section className="section-shell animate-fade-up">
                    <div className="mb-10 px-1">
                        <SectionHeader title="Scholarly Guidance" subtitle="Elevating research candidates through structured mentorship and technical governance." centered={false} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {scholarlyGuidance.map((item, idx) => (
                            <div key={idx} className={`bg-white p-10 rounded-[20px] border ${item.highlight ? 'border-sky-500 shadow-xl' : 'border-slate-300 shadow-sm'} flex flex-col h-full relative group transition-all hover:-translate-y-1`}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-300 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                                        <item.icon size={24} weight="duotone" />
                                    </div>
                                    <span className="text-[12px] font-black text-slate-300 tracking-[0.2em] uppercase">{item.meta}</span>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-[26px] font-black text-[#1e1b4b] mb-2">{item.title}</h3>
                                    <p className="text-[12px] font-black text-indigo-500 uppercase tracking-widest mb-2">{item.metric}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3.2 MENTORSHIP & GUIDANCE (IMAGE SECTION) */}
                <section className="section-shell animate-fade-up">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 px-1">
                        <SectionHeader
                            title="Mentorship & Guidance"
                            subtitle="Guiding students and researchers across diverse domains and emerging technologies."
                            centered={false}
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {mentorship?.mentorshipDomains?.map((domain, idx) => {
                            const palettes = [
                                { color: "border-purple-100 hover:border-purple-200", iconBg: "bg-purple-50", iconText: "text-purple-600", glow: "shadow-purple-500/5" },
                                { color: "border-indigo-100 hover:border-indigo-200", iconBg: "bg-indigo-50", iconText: "text-indigo-600", glow: "shadow-indigo-500/5" },
                                { color: "border-rose-100 hover:border-rose-200", iconBg: "bg-rose-50", iconText: "text-rose-600", glow: "shadow-rose-500/5" },
                                { color: "border-emerald-100 hover:border-emerald-200", iconBg: "bg-emerald-50", iconText: "text-emerald-600", glow: "shadow-emerald-500/5" },
                                { color: "border-sky-100 hover:border-sky-200", iconBg: "bg-sky-50", iconText: "text-sky-600", glow: "shadow-sky-500/5" },
                                { color: "border-amber-100 hover:border-amber-200", iconBg: "bg-amber-50", iconText: "text-amber-600", glow: "shadow-amber-500/5" }
                            ];
                            const palette = palettes[idx % palettes.length];
                            const icons = [Brain, Cube, Heartbeat, Buildings, Fingerprint, Cpu];
                            const Icon = icons[idx] || Rocket;
                            return (
                                <div
                                    key={idx}
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                    className={`relative overflow-hidden bg-white/85 backdrop-blur-xl px-6 py-8 rounded-[28px] border-2 ${palette.color} ${palette.glow} shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(99,102,241,0.14)] transition-all duration-500 flex flex-col items-center text-center group animate-fade-up`}
                                >
                                    {/* TOP ACCENT */}
                                    <div className={`absolute inset-x-0 top-0 h-[3px] ${palette.iconBg.replace('bg-', 'bg-').replace('50', '600')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    {/* ICON */}
                                    <div className={`relative z-10 w-11 h-11 rounded-2xl ${palette.iconBg} flex items-center justify-center ${palette.iconText} shadow-sm mb-6 group-hover:scale-110 transition-all duration-500`}>
                                        <Icon size={28} weight="bold" />
                                    </div>
                                    {/* TITLE */}
                                    <h3 className="relative z-10 text-[1.35rem] font-black text-slate-900 leading-tight mb-3 tracking-tight">{domain.title}</h3>
                                    {/* DESCRIPTION */}
                                    <p className="relative z-10 text-[14.5px] text-slate-600 font-medium leading-relaxed mb-6 ">{domain.description}</p>
                                    {/* PROJECTS */}
                                    <div className={`relative z-10 mt-auto px-4 py-1.5 rounded-full ${palette.iconBg} border ${palette.color.split(' ')[0]} ${palette.iconText} text-[10.5px] font-black uppercase tracking-widest shadow-sm group-hover:shadow-md transition-all`}>
                                        {domain.projects}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 3.3 STUDENT RESEARCH SUPERVISION */}
                <section className="section-shell animate-fade-up">
                    <div className="mb-8 px-1">
                        <SectionHeader
                            title="Student Research Supervision"
                            subtitle="Empowering future researchers through rigorous academic supervision and project mentoring."
                            centered={false}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mentorship?.studentSupervision?.map((sup, idx) => {
                            const palettes = [
                                { color: "border-indigo-100", iconBg: "bg-indigo-50", iconText: "text-indigo-600", glow: "shadow-indigo-500/5" },
                                { color: "border-emerald-100", iconBg: "bg-emerald-50", iconText: "text-emerald-600", glow: "shadow-emerald-500/5" }
                            ];
                            const palette = palettes[idx % palettes.length];
                            return (
                                <div key={idx} className={`relative overflow-hidden bg-white/90 backdrop-blur-xl p-6 rounded-[40px] border-2 ${palette.color} ${palette.glow} shadow-[0_20px_50px_rgba(15,23,42,0.06)] group hover:-translate-y-1 hover:shadow-xl transition-all duration-500`}>
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className={`w-20 h-20 rounded-[28px] ${palette.iconBg} flex items-center justify-center ${palette.iconText} shrink-0 shadow-sm border ${palette.color}`}>
                                            <Student size={40} weight="bold" />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">{sup.count} Candidates</h3>
                                                    <span className={`px-4 py-1.5 rounded-full ${palette.iconBg} ${palette.iconText} text-[11px] font-black uppercase tracking-widest border ${palette.color}`}>
                                                        {sup.category}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-bold text-slate-500">{sup.institution}</p>
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Key Research Topics</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {sup.topics?.map((topic, tIdx) => (
                                                        <span key={tIdx} className="bg-slate-50 px-3 py-1.5 rounded-xl text-[13px] font-bold text-slate-600 border border-slate-100 group-hover:border-indigo-100 transition-colors">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 3.5 CLUBS & INNOVATION LEADERSHIP (NEW SECTION) */}
                <section className="section-shell animate-fade-up">

                    <div className="mb-8 px-1">
                        <SectionHeader
                            title="Clubs & Innovation Leadership"
                            subtitle="Building student communities and innovation ecosystems."
                            centered={false}
                        />
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {mentorship?.clubs?.map((club, idx) => {
                            const palettes = [
                                { color: "border-rose-100 hover:border-rose-200", iconBg: "bg-rose-50", iconText: "text-rose-600", glow: "shadow-rose-500/5" },
                                { color: "border-indigo-100 hover:border-indigo-200", iconBg: "bg-indigo-50", iconText: "text-indigo-600", glow: "shadow-indigo-500/5" },
                                { color: "border-amber-100 hover:border-amber-200", iconBg: "bg-amber-50", iconText: "text-amber-600", glow: "shadow-amber-500/5" }
                            ];
                            const palette = palettes[idx % palettes.length];
                            return (
                                <div
                                    key={idx}
                                    style={{ animationDelay: `${idx * 150}ms` }}
                                    className={`relative overflow-hidden rounded-[32px] bg-white/85 backdrop-blur-md border-2 ${palette.color} ${palette.glow} shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(99,102,241,0.14)] transition-all duration-500 p-8 group animate-fade-up`}
                                >
                                    {/* TOP ACCENT */}
                                    <div className={`absolute inset-x-0 top-0 h-[4px] ${palette.iconText.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    {/* HEADER */}
                                    <div className="flex items-start gap-5 mb-5 relative z-10">
                                        {/* ICON */}
                                        <div className={`w-12 h-12 rounded-2xl ${palette.iconBg} flex items-center justify-center ${palette.iconText} shadow-sm transition-all duration-500`}>
                                            <UsersThree size={18} weight="bold" />
                                        </div>
                                        {/* CONTENT */}
                                        <div className="min-w-0">
                                            <span className={`inline-flex px-3 py-1 rounded-full ${palette.iconBg.replace('bg-', 'bg-').replace('600', '50')} ${palette.iconBg.replace('bg-', 'text-')} text-[10px] font-black uppercase tracking-widest mb-2`}>Student Leadership</span>
                                            <h3 className="text-[1.5rem] font-black text-[#1e1b4b] leading-[1.1] tracking-tight mb-1">{club.title}</h3>
                                            <p className={`text-[12px] uppercase tracking-widest ${palette.iconBg.replace('bg-', 'text-')} font-black`}>{club.role}</p>
                                        </div>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <p className="text-base text-slate-700 font-medium leading-[1.7] mb-8 relative z-10 ">{club.description}</p>

                                    {/* FOOTER */}
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                                        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Innovation Ecosystem</span>
                                        <div className={`px-4 py-1.5 rounded-full ${palette.iconBg.replace('bg-', 'bg-').replace('600', '50')} border ${palette.color.split(' ')[0]} ${palette.iconBg.replace('bg-', 'text-')} text-[14px] font-black shadow-md`}>{club.budget}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {/* 4. ACADEMIC CURRICULUM (IMAGE 3) */}
                <section className="section-shell animate-fade-up">

                    <div className="mb-5 px-1">
                        <SectionHeader title="Curriculum Development" subtitle="Master course architectures and pedagogical blueprints across diverse academic levels." centered={false} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {curriculumData.map((item, idx) => (
                            <article key={idx} className={`relative overflow-hidden bg-white/80 backdrop-blur-md p-6 rounded-[26px] border-2 ${item.color} ${item.glow} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.10)] group`}>
                                {/* TOP ACCENT */}
                                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-${item.iconBg.split('-')[1]}-400 to-transparent opacity-30`}></div>
                                {/* TOP */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconText} shrink-0 shadow-md`}>
                                        <item.icon size={18} weight="bold" />
                                    </div>
                                    <h3 className="text-[1.45rem] font-black text-sm leading-[1.1] tracking-tight">{item.degree}</h3>
                                </div>
                                {/* SUBJECTS */}
                                <ul className="space-y-3 relative z-10">
                                    {item.subjects.map((sub, sIdx) => (
                                        <li key={sIdx} className="flex items-start gap-2.5 text-[16.5px] font-bold text-slate-500 leading-tight">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.iconBg} mt-1.5 opacity-40 shrink-0`}></div>
                                            <span>{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                {/* 5. LEADERSHIP ROLES (TIMELINE STYLE) */}
                <section className="section-shell animate-fade-up">

                    <div className="mb-8 px-1">
                        <SectionHeader
                            title="Leadership Roles"
                            subtitle="Academic governance and institutional program ownership."
                            centered={false}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols- gap-6">
                        {mentorship?.leadershipRoles?.map((role, idx) => {
                            const palettes = [
                                { color: "border-indigo-100 hover:border-indigo-200", iconBg: "bg-indigo-50", iconText: "text-indigo-600", glow: "shadow-indigo-500/5" },
                                { color: "border-violet-100 hover:border-violet-200", iconBg: "bg-violet-50", iconText: "text-violet-600", glow: "shadow-violet-500/5" },
                                { color: "border-blue-100 hover:border-blue-200", iconBg: "bg-blue-50", iconText: "text-blue-600", glow: "shadow-blue-500/5" },
                                { color: "border-cyan-100 hover:border-cyan-200", iconBg: "bg-cyan-50", iconText: "text-cyan-600", glow: "shadow-cyan-500/5" }
                            ];
                            const palette = palettes[idx % palettes.length];
                            return (
                                <article
                                    key={idx}
                                    style={{ animationDelay: `${idx * 150}ms` }}
                                    className={`relative overflow-hidden bg-white/85 backdrop-blur-xl p-4 rounded-[32px] border-2 ${palette.color} ${palette.glow} shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(99,102,241,0.12)] transition-all duration-500 flex flex-col group animate-fade-up pl-8`}
                                >
                                    {/* TOP ACCENT */}
                                    <div className={`absolute inset-x-0 top-0 h-[4px] ${palette.iconText.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    {/* HEADER */}
                                    <div className="relative z-10 flex justify-between items-start mb-8">
                                        <span className={`px-3 py-1 rounded-full ${palette.iconBg} ${palette.iconText} border ${palette.color.split(' ')[0]} text-[12px] font-black uppercase tracking-widest shadow-sm`}>{role.duration}</span>
                                        <div className={`w-12 h-12 rounded-2xl ${palette.iconBg} flex items-center justify-center ${palette.iconText} shadow-sm transition-all duration-500`}><Bank size={24} weight="bold" /></div>
                                    </div>
                                    {/* CONTENT */}
                                    <div className="relative z-10 flex flex-col h-full space-y-4">
                                        <h3 className="text-[1.45rem] font-black text-[#1e1b4b] leading-tight tracking-tight min-h-[60px] drop-shadow-sm">{role.title}</h3>
                                        <p className={`text-[12.5px] font-black ${palette.iconText} uppercase tracking-widest`}>{role.subtitle}</p>
                                        <ul className="space-y-2">
                                            {role.highlights?.map((h, i) => (
                                                <li key={i} className="text-[14.5px] text-slate-600 font-medium leading-snug flex items-start gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${palette.iconBg.replace('bg-', 'bg-').replace('50', '400')} mt-1.5 shrink-0`}></div>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* FOOTER */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3 relative z-10">
                                        <div className={`w-8 h-8 rounded-lg ${palette.iconBg} flex items-center justify-center ${palette.iconText} shadow-sm`}><Bank size={16} /></div>
                                        <span className="text-sm font-black text-slate-600 leading-snug">{role.institution}</span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* 6. ACADEMIC AFFILIATIONS */}
                <section className="section-shell animate-fade-up">
                    <div className="mb-10 px-1">
                        <SectionHeader title="Academic Affiliations" subtitle="Active membership in global scholarly organizations and professional bodies." centered={false} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                        {[
                            { name: "Senior Member, IEEE (August 2023)", icon: Medal, color: "border-purple-100 hover:border-purple-200", iconBg: "bg-purple-50", iconText: "text-purple-600", glow: "shadow-purple-500/5" },
                            { name: "Member, ISCA (Science Congress)", icon: Users, color: "border-blue-100 hover:border-blue-200", iconBg: "bg-blue-50", iconText: "text-blue-600", glow: "shadow-blue-500/5" },
                            { name: "Member, IAENG / IACSIT", icon: Bank, color: "border-emerald-100 hover:border-emerald-200", iconBg: "bg-emerald-50", iconText: "text-emerald-600", glow: "shadow-emerald-500/5" },
                            { name: "EURASIP (European Association)", icon: Globe, color: "border-amber-100 hover:border-amber-200", iconBg: "bg-amber-50", iconText: "text-amber-600", glow: "shadow-amber-500/5" },
                            { name: "Institute of Scholars, Bangalore", icon: GraduationCap, color: "border-rose-100 hover:border-rose-200", iconBg: "bg-rose-50", iconText: "text-rose-600", glow: "shadow-rose-500/5" },
                            { name: "IEEE Biometrics Council", icon: Fingerprint, color: "border-sky-100 hover:border-sky-200", iconBg: "bg-sky-50", iconText: "text-sky-600", glow: "shadow-sky-500/5" }
                        ].map((aff, idx) => (
                            <div key={idx}
                                style={{ animationDelay: `${idx * 100}ms` }}
                                className={`relative overflow-hidden bg-white/85 backdrop-blur-md px-4 py-8 rounded-[28px] border-2 ${aff.color} ${aff.glow} shadow-[0_12px_35px_rgba(15,23,42,0.06)] flex flex-col items-center text-center gap-6 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(99,102,241,0.15)] transition-all duration-500 group animate-fade-up`}
                            >
                                {/* TOP ACCENT */}
                                <div className={`absolute inset-x-0 top-0 h-[3px] ${aff.iconText.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                <div className={`w-14 h-14 rounded-2xl ${aff.iconBg} flex items-center justify-center ${aff.iconText} transition-all duration-500 shadow-md`}>
                                    <aff.icon size={28} weight="bold" />
                                </div>
                                <span className="text-[14.5px] leading-snug font-black text-slate-800 tracking-tight px-1">{aff.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6.5 KEYNOTE & EXPERT SESSIONS */}
                <section className="section-shell animate-fade-up">
                    <div className="mb-10 px-1">
                        <SectionHeader title="Professional Engagements" subtitle="Invited contributions as a thought leader and subject matter expert in global forums." centered={false} />
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
                        {/* Keynote Speaker */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <MicrophoneStage size={22} weight="bold" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Keynote Speaker</h3>
                                </div>
                                <Link to="/engagements?tab=keynote" className="text-[12px] font-black uppercase tracking-widest text-indigo-500 hover:text-white bg-transparent hover:bg-indigo-600 px-4 py-2 rounded-full border border-indigo-100 hover:border-indigo-600 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:translate-y-0 group/link">
                                    View All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {cvData.mentorship.engagements.keynoteSpeaker.slice(0, 3).map((item, idx) => (
                                    <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-[28px] border-2 border-indigo-50 hover:border-indigo-100 shadow-sm hover:shadow-md transition-all group flex flex-col min-h-[160px]">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-[12px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">{item.date}</span>
                                            {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors"><ArrowRight size={16} weight="bold" /></a>}
                                        </div>
                                        <h4 className="text-[17px] font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-700 transition-colors">{item.event}</h4>
                                        <p className="text-sm font-bold text-slate-500 mt-auto pt-2">{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resource Person */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <ChalkboardTeacher size={22} weight="bold" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Resource Person</h3>
                                </div>
                                <Link to="/engagements?tab=resource" className="text-[12px] font-black uppercase tracking-widest text-emerald-600 hover:text-white bg-transparent hover:bg-emerald-600 px-4 py-2 rounded-full border border-emerald-100 hover:border-emerald-600 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_8px_20px_rgba(5,150,105,0.3)] hover:-translate-y-0.5 active:translate-y-0 group/link">
                                    View All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {cvData.mentorship.engagements.resourcePerson.slice(0, 3).map((item, idx) => (
                                    <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-[28px] border-2 border-emerald-50 hover:border-emerald-100 shadow-sm hover:shadow-md transition-all group flex flex-col min-h-[160px]">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[12px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{item.date}</span>
                                            <span className="text-[12px] font-black uppercase tracking-widest text-slate-400 font-bold">{item.role}</span>
                                        </div>
                                        <h4 className="text-[17px] font-black text-slate-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors">{item.event}</h4>
                                        <p className="text-sm font-bold text-slate-500 mt-auto pt-2">{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                        {/* Session Chair */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                        <UserFocus size={22} weight="bold" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Session Chair</h3>
                                </div>
                                <Link to="/engagements?tab=chair" className="text-[12px] font-black uppercase tracking-widest text-amber-600 hover:text-white bg-transparent hover:bg-amber-600 px-4 py-2 rounded-full border border-amber-100 hover:border-amber-600 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_8px_20px_rgba(217,119,6,0.3)] hover:-translate-y-0.5 active:translate-y-0 group/link">
                                    View All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {cvData.mentorship.engagements.sessionChair.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-[28px] border-2 border-amber-50 hover:border-amber-100 shadow-sm hover:shadow-md transition-all group flex flex-col min-h-[160px]">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{item.date}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-550 font-bold italic">Chairing Role</span>
                                        </div>
                                        <h4 className="text-[17px] font-black text-slate-900 leading-tight mb-2 group-hover:text-amber-700 transition-colors">{item.event}</h4>
                                        <p className="text-sm font-bold text-slate-500 mt-auto pt-2">{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Journal Reviewer */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                                        <BookOpen size={22} weight="bold" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Journal Reviewer</h3>
                                </div>
                                <Link to="/engagements?tab=reviewer" className="text-[12px] font-black uppercase tracking-widest text-rose-600 hover:text-white bg-transparent hover:bg-rose-600 px-4 py-2 rounded-full border border-rose-100 hover:border-rose-600 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_8px_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 active:translate-y-0 group/link">
                                    View All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {cvData.mentorship.engagements.journalReviewer.slice(0, 2).map((item, idx) => (
                                    <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-[28px] border-2 border-rose-50 hover:border-rose-100 shadow-sm hover:shadow-md transition-all group flex flex-col min-h-[160px]">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[12px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">{item.publisher}</span>
                                            <span className="text-[12px] font-black uppercase tracking-widest text-slate-550 font-bold italic">Peer Review</span>
                                        </div>
                                        <h4 className="text-[17px] font-black text-slate-900 leading-tight group-hover:text-rose-700 transition-colors">{item.journal}</h4>
                                        {item.meta && <p className="text-[11px] font-bold text-slate-400 mt-auto">{item.meta}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. KEY INITIATIVES */}
                <section className="section-shell animate-fade-up">
                    <div className="flex items-center justify-between mb-8 px-1">
                        <SectionHeader title="Key Initiatives & Contributions" subtitle="Active contributions beyond the classroom." centered={false} />
                        <Link to="/engagements?tab=initiatives" className="text-[12px] font-black uppercase tracking-widest text-indigo-500 hover:text-white bg-transparent hover:bg-indigo-600 px-4 py-2 rounded-full border border-indigo-100 hover:border-indigo-600 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:translate-y-0 group/link">
                            View All <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mentorship?.initiatives?.slice(0, 4).map((item, idx) => {
                            const palettes = [
                                { color: "border-blue-100 hover:border-blue-200", iconBg: "bg-blue-50", iconText: "text-blue-600", glow: "shadow-blue-500/5" },
                                { color: "border-indigo-100 hover:border-indigo-200", iconBg: "bg-indigo-50", iconText: "text-indigo-600", glow: "shadow-indigo-500/5" },
                                { color: "border-violet-100 hover:border-violet-200", iconBg: "bg-violet-50", iconText: "text-violet-600", glow: "shadow-violet-500/5" },
                                { color: "border-cyan-100 hover:border-cyan-200", iconBg: "bg-cyan-50", iconText: "text-cyan-600", glow: "shadow-cyan-500/5" }
                            ];
                            const palette = palettes[idx % palettes.length];
                            const icons = [Bank, Presentation, ShieldCheck, ChalkboardTeacher, Buildings, Handshake, Lightbulb, Globe];
                            const Icon = icons[idx] || Certificate;
                            return (
                                <article
                                    key={idx}
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                    className={`relative overflow-hidden rounded-[28px] bg-white/85 backdrop-blur-md border-2 ${palette.color} ${palette.glow} shadow-[0_12px_35px_rgba(15,23,42,0.06)] p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(99,102,241,0.15)] group animate-fade-up h-full`}
                                >
                                    {/* TOP ACCENT */}
                                    <div className={`absolute inset-x-0 top-0 h-[4px] ${palette.iconText.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    {/* ICON */}
                                    <div className={`w-14 h-14 rounded-2xl ${palette.iconBg} flex items-center justify-center ${palette.iconText} shadow-sm mb-6 transition-all duration-500`}>
                                        <Icon size={24} weight="bold" />
                                    </div>
                                    {/* TITLE */}
                                    <h3 className="text-[1.15rem] font-black text-[#1e1b4b] leading-tight mb-4 min-h-[44px] flex items-center justify-center tracking-tight drop-shadow-sm">{item.title}</h3>
                                    {/* DESCRIPTION */}
                                    <p className="text-[14.5px] text-slate-600 font-medium leading-relaxed mt-auto">{item.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>
                {/* 8. MENTORSHIP PHILOSOPHY (IMAGE 4) */}
                <section className="section-shell animate-fade-up">
                    <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border-2 border-indigo-100 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col lg:flex-row items-center gap-10 group">
                        {/* TOP ACCENT */}
                        <div className="absolute inset-x-0 top-0 h-[8px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* LEFT: ICON */}
                        <div className="shrink-0 relative">
                            <div className="absolute inset-0 bg-indigo-200 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative w-20 h-20 rounded-[24px] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100 group-hover:rotate-[8deg] transition-all duration-500">
                                <UsersThree size={40} weight="bold" />
                            </div>
                        </div>

                        {/* CENTER: TEXT */}
                        <div className="flex-grow space-y-4 text-center lg:text-left relative z-10">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none drop-shadow-sm">Mentorship Philosophy</h2>
                            <p className="text-[16px] text-slate-600 font-medium leading-relaxed max-w-xl ">
                                I believe in empowering students to think critically, explore fearlessly, and build solutions that create real-world impact. My goal is to nurture researchers and innovators who are not only skilled but also ethical, collaborative and responsible leaders of tomorrow.
                            </p>
                        </div>

                        {/* RIGHT: TRAIT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full lg:min-w-[440px]">
                            {philosophyCards.map((p, i) => (
                                <div key={i} className={`bg-white/50 backdrop-blur-sm p-3.5 px-5 rounded-2xl border-2 ${p.bg.replace('bg-', 'border-').replace('50', '100')} shadow-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all group/card`}>
                                    <div className={`w-10 h-10 rounded-xl ${p.bg} ${p.color} flex items-center justify-center shrink-0 shadow-sm group-hover/card:scale-110 transition-transform`}>
                                        <p.icon size={20} weight="bold" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className={`text-[9.5px] font-black uppercase tracking-[0.15em] ${p.color} mb-0.5 opacity-80`}>{p.verb}</div>
                                        <div className="text-[15px] font-black text-slate-900 leading-none truncate">{p.trait}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Academics;
