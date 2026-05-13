import { useEffect } from 'react';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';
import SectionHeader from '../components/ui/SectionHeader';
import DataCard from '../components/ui/DataCard';
import { cvData } from '../data/cvData';

export default function About() {
    useEffect(() => {
        document.title = 'About | Dr. Sumegh S. Tharewal';
    }, []);

    const { personalInfo, education, experience, skills, professionalLeadership, stats, academics } = cvData;

    return (
        <div className="page-wrap pb-10">
            <div className="container space-y-8">
                <section className="split-layout">
                    <div className="p-5 md:p-6 space-y-5">
                        <div className="page-intro">
                            <span className="section-kicker">About the researcher</span>
                            <h1 className="page-title">Academic leadership grounded in research, teaching, and applied innovation.</h1>
                            {personalInfo.aboutSummary.split('\n\n').map((para, i) => (
                                <p key={i} className="text-base md:text-md text-slate-600 leading-relaxed font-medium text-justify">
                                    {para}
                                </p>
                            ))}

                        </div>
                        <div className="metrics-grid">
                            {stats.slice(0, 3).map((item) => (
                                <div key={item.label} className="metric-card">
                                    <div className="metric-value">{item.value}</div>
                                    <div className="text-sm text-[var(--text-muted)]">{item.label}</div>
                                </div>
                            ))}
                        </div>
                        <a href={`mailto:${personalInfo.email}`} className="btn-primary w-fit">
                            Contact <ArrowRight size={18} weight="bold" />
                        </a>
                    </div>
                    <div className="about-photo-stack">
                        <div className="photo-frame">
                            <img src={`${import.meta.env.BASE_URL}portrait_final.png`} alt="Dr. Sumegh S. Tharewal" />
                        </div>
                        <div className="mini-card about-photo-caption">
                            <p className="caption-title text-center">
                                PhD · Post-Doctoral · Senior Member IEEE
                            </p>
                            <p className="caption-subtitle text-center">
                                Dean, Center of Artificial Intelligence · Indira University, Pune
                            </p>
                        </div>
                        <div className="mini-card about-focus-card">
                            <p className="eyebrow">Academic profile</p>
                            <div className="about-focus-list">
                                <div className="hero-highlight-item">
                                    <span className="feature-dot" />
                                    <span>Research in AI, biometrics, blockchain, and computer vision</span>
                                </div>
                                <div className="hero-highlight-item">
                                    <span className="feature-dot" />
                                    <span>Teaching, curriculum leadership, invited talks, and scholarly review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-shell">
                    <SectionHeader
                        title="Academic appointments & education"
                        subtitle="A timeline of institutional affiliations, research leadership, and academic training."
                        centered={false}
                    />
                    <div className="split-layout mt-1">
                        <div className="experience-list space-y-4 relative">
                            <div className="timeline-line"></div>
                            <span className="section-kicker mb-6 inline-block">Professional Experience</span>
                            {experience.map((exp, index) => (
                                <div key={index} className="experience-card relative pl-3">
                                    <div className="timeline-marker"></div>
                                    <div className="glass-panel p-5">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                            <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                                            <span className="text-sm font-bold text-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 rounded-full uppercase tracking-wider">{exp.duration}</span>
                                        </div>
                                        <p className="text-base font-semibold text-[var(--text-secondary)] mb-3">{exp.company}</p>
                                        <p className="lux-copy">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="education-list space-y-4 relative">
                            <div className="timeline-line"></div>
                            <span className="section-kicker mb-6 inline-block">Education</span>
                            {education.map((edu, index) => (
                                <div key={index} className="experience-card relative pl-10">
                                    <div className="timeline-marker"></div>
                                    <div className="glass-panel p-6">
                                        <div className="flex justify-between items-start mb-0">
                                            {/* Changed text-lg to text-base */}
                                            <h3 className="text-base font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                                            {/* Changed text-sm to text-xs */}
                                            <span className="text-xs font-bold text-[var(--accent-secondary)] bg-[var(--accent-soft-strong)] px-3 py-1 rounded-full uppercase tracking-wider">{edu.year}</span>
                                        </div>
                                        {/* Changed text-lg to text-sm */}
                                        <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">{edu.institution}</p>
                                        {/* Added text-xs to the description container */}
                                        {edu.description && <p className="lux-copy text-xs">{edu.description}</p>}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <section className="section-shell">
                    <SectionHeader
                        title="Areas of expertise"
                        subtitle="Technical competencies and research domains refined through over a decade of high-impact scholarly work."
                        centered={false}
                    />
                    <div className="card-grid-4 mt-1">
                        {skills.categories.map((cat, index) => (
                            <div key={index} className="card-scientific p-6 group">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                                        <Sparkle size={24} weight="duotone" />
                                    </div>
                                    <h3 className="text-lg font-bold">{cat.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[13.5px] font-semibold text-slate-600 hover:border-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="section-shell">
                    <SectionHeader
                        title="Institutional Leadership & Service"
                        subtitle="Orchestrating academic governance, policy development, and strategic research initiatives across global institutions."
                        centered={false}
                    />

                    <div className="space-y-9 mt-2">
                        {/* Committee & Advisory Roles */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {academics.governance.map((gov, index) => (
                                <div key={index} className="glass-panel p-5 border border-slate-100 hover:border-[var(--accent-secondary)] transition-all text-left">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-black text-[var(--accent-secondary)] uppercase tracking-[0.2em]">Service Role</span>
                                        <span className="text-sm font-bold text-slate-400">{gov.year}</span>
                                    </div>
                                    <h4 className="text-md font-black text-slate-800 mb-3 leading-snug" style={{ textAlign: 'left' }}>{gov.role}</h4>
                                    <p className="text-base font-medium text-slate-500" style={{ textAlign: 'left' }}>{gov.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



            </div>
        </div>
    );
}
