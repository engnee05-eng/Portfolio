import { ArrowRight, Sparkle, GraduationCap, LinkedinLogo, IdentificationCard, Globe, BookOpen, Atom, Certificate, ShareNetwork, ChartBar, Medal } from '@phosphor-icons/react';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { cvData } from '../data/cvData';

import {
    UserCircle,
    Fingerprint,
    Database,
    Robot,
    Image as ImageIcon,
    Cpu
} from "@phosphor-icons/react";

const spotlightItems = [
    { text: 'Human-centered AI systems', icon: UserCircle },
    { text: '3D biometrics and identity science', icon: Fingerprint },
    { text: 'Blockchain for trusted health data', icon: Database },
    { text: 'Robot perception for real environments', icon: Robot },
    { text: 'Digital image processing', icon: ImageIcon }, // Use the nickname here
    { text: 'IoT systems', icon: Cpu }
];

export default function Home() {
    useEffect(() => {
        document.title = 'Dr. Sumegh S. Tharewal | AI Research Portfolio';
    }, []);

    const { personalInfo, heroStats, researchThemes, awards, projects, books, patents } = cvData;
    const profileLinks = [
        { label: 'Scholar', href: personalInfo.googleScholar, icon: GraduationCap, title: 'Google Scholar' },
        { label: 'Scopus', href: personalInfo.scopusUrl, icon: Atom, title: 'Scopus' },
        { label: 'ResearchGate', href: personalInfo.researchGate, icon: Globe, title: 'ResearchGate' },
        { label: 'ORCID', href: personalInfo.orcidUrl, icon: IdentificationCard, title: 'ORCID' },
        { label: 'SciProfiles', href: personalInfo.sciProfiles, icon: BookOpen, title: 'SciProfiles' },
        { label: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedinLogo, title: 'LinkedIn' }
    ];

    const statIcons = {
        "Patents Granted": Certificate,
        "Publications": BookOpen,
        "Citations": ShareNetwork,
        "H-Index": ChartBar,
        "Scopus-Index": Globe,
        "Years in Academia": Medal
    };

    return (
        <div className="page-content overflow-hidden">
            <section className="hero-shell">
                <div className="container hero-grid fade-in">
                    <div className="hero-panel py-2 md:py-4">
                        <span className="section-kicker">Open to research collaborations</span>
                        <div className="hero-panel-body mt-4">
                            <div>
                                <p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">{personalInfo.title}</p>
                                <h1 className="hero-title mt-3 mb-6 pt-3">
                                    Focused research in <span className="hero-gradient">AI, Multimodal biometrics, and Trustworthy systems</span>.
                                </h1>
                            </div>
                            <p className="hero-summary pt-3 text-[13.5px] text-slate-600 leading-[1.8] font-medium text-justify [text-align-last:left]">
                                Dr. Sumegh Tharewal is the Dean, Center of Artificial Intelligence, Indira University, Pune, with over 15 years of experience in academics, research, innovation, and academic leadership. His expertise spans Artificial Intelligence, Machine Learning, Blockchain Technology, Biometrics, Computer Vision, Pattern Recognition, and Image Processing.
                            </p>
                            <p className="hero-summary mt-5 mb-8 text-[13.5px] text-slate-600 leading-[1.8] font-medium text-justify [text-align-last:left]">
                                With more than 50 research publications, 42 Scopus-indexed papers, 720+ citations, 15 patents, and several prestigious awards and fellowships, he has made significant contributions to advanced computing and intelligent technologies. As an academic leader, researcher, mentor, and innovator, he is committed to promoting impactful research, industry-oriented learning, and AI-driven solutions for the future.
                            </p>
                            <div className="pill-row mt-4 flex flex-wrap gap-2.5">
                                {spotlightItems.map(({ text, icon: Icon }) => (
                                    <span key={text} className="tag flex items-center gap-1.5 px-3 py-1.5">
                                        <Icon size={24} weight="bold" />
                                        <span className="text-sm font-medium">{text}</span>
                                    </span>
                                ))}
                            </div>
                            <div className="hero-actions flex-col sm:flex-row mt-8">
                                <Link to="/about" className="btn-primary">
                                    Explore profile <ArrowRight size={18} weight="bold" />
                                </Link>
                            </div>
                        </div>
                        <div className="hero-metrics-grid mt-6">
                            {heroStats.map((stat) => {
                                const StatIcon = statIcons[stat.label] || Sparkle;
                                return (
                                    <div key={stat.label} className="metric-card ">
                                        <StatIcon size={24} weight="duotone" className="text-[var(--accent)] mb-1 opacity-80" />
                                        <div className="metric-value">{stat.value}</div>
                                        <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hero-side">
                        <div className="hero-photo-block-v">
                            <div className="photo-frame-md">
                                <img src={`${import.meta.env.BASE_URL}portrait_final.png`} alt="Portrait of Dr. Sumegh S. Tharewal" />
                            </div>
                            <div className="hero-photo-meta-v">
                                <p className="hero-photo-name">{personalInfo.name}</p>
                                <p className="hero-photo-title">{personalInfo.title}</p>
                                <div className="hero-profile-links">
                                    {profileLinks.map(({ label, href, icon: Icon, title }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="profile-link-pill" title={title}>
                                            <Icon size={16} weight="bold" />
                                            <span>{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel hero-side-panel p-2.5 md:p-2.5 flex flex-col justify-between gap-2">
                            <div>
                                <span className="section-kicker">Current focus</span>
                                <div className="feature-list mt-3 space-y-4">
                                    {researchThemes.slice(0, 4).map((area) => {
                                        const areaIcon = spotlightItems.find(item => area.title.toLowerCase().includes(item.text.toLowerCase().split(' ')[0]))?.icon || Sparkle;
                                        const Icon = areaIcon;
                                        return (
                                            <div key={area.title} className="feature-item flex gap-3 items-start">
                                                <div className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                                                    <Icon size={14} weight="duotone" />
                                                </div>
                                                <div>
                                                    <p className="text-base font-bold text-[var(--text-primary)] leading-tight">{area.title}</p>
                                                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{area.description.split(',')[0]}.</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="card-scientific p-5 border-t border-slate-100 mt-2">
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                        <Globe size={16} weight="duotone" />
                                    </div>
                                    <div>
                                        <p className="text-md font-black uppercase tracking-widest text-[var(--text-muted)] mb-1">Location</p>
                                        <p className="text-base font-bold text-[var(--text-primary)] leading-none">{personalInfo.address}</p>
                                        <p className="text-sm text-[var(--text-secondary)] mt-1.5 font-medium leading-relaxed">Available for academic collaboration, invited talks, and funded research.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container section-stack-tight">
                    <SectionHeader title="Selected recognition" subtitle="Selected signals that reinforce academic trust and international visibility." />
                    <div className="card-grid-4">
                        {awards.slice(0, 4).map((award) => (
                            <div key={`${award.title}-${award.year}`} className="timeline-card group p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="section-kicker">{award.year}</span>
                                    <Sparkle size={24} className="text-[var(--accent-secondary)]" weight="fill" />
                                </div>
                                <h3 className="text-xl mt-6 font-black group-hover:text-[var(--accent)] transition-colors leading-tight">{award.title}</h3>
                                <p className="mt-4 text-[var(--text-secondary)] lux-copy">{award.details || award.body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-0.5">
                        <Link to="/archive?tab=awards" className="btn-secondary group">
                            Explore full honors list <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-shell">
                <div className="container section-stack-tight">
                    <SectionHeader title="Current research directions" subtitle="A snapshot of current themes across robotics, identity systems, healthcare, and applied AI." />
                    <div className="grid grid-cols-4 gap-4 mt-1">
                        {projects.slice(0, 4).map((project) => (
                            <div key={project.title} className="card-modern p-6">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <span className={`status-pill ${project.ongoing ? 'active' : 'archived'}`}>
                                        {project.ongoing ? 'Active project' : 'Completed project'}
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">{project.tech[0]}</span>
                                </div>
                                <h3 className="text-xl font-black mb-4 leading-tight">{project.title}</h3>
                                <p className="mt-4 text-lg text-[var(--text-secondary)] lux-copy">{project.description}</p>
                                <div className="tag-row mt-8">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-pill px-5 py-3 text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-0.5">
                        <Link to="/archive?tab=journals" className="btn-secondary group">
                            Explore scholarly publications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section-shell">
                <div className="container">
                    <div className="cta-banner">
                        <span className="section-kicker">Collaboration</span>
                        <div className="cta-layout mt-1">
                            <div className="cta-copy">
                                <h4 className="text-[1.7rem] md:text-[2.15rem] font-black tracking-tight leading-none whitespace-nowrap">
                                    Open to meaningful academic and research collaborations.
                                </h4>
                                <p className="text-[var(--text-secondary)]">For research partnerships, invited talks, consultancy, or interdisciplinary projects, please get in touch.</p>
                            </div>
                            <Link to="/contact" className="section-kicker btn-compact cta-button">
                                Contact <ArrowRight size={18} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
