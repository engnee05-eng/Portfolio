import { ArrowSquareOut, EnvelopeSimple, GraduationCap, LinkedinLogo, Flask } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { cvData } from '../data/cvData';

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact | Dr. Sumegh S. Tharewal';
    }, []);

    const { personalInfo } = cvData;

    const links = [
        { label: 'LinkedIn', url: personalInfo.linkedin, icon: LinkedinLogo },
        { label: 'Google Scholar', url: personalInfo.googleScholar, icon: GraduationCap },
        { label: 'ResearchGate', url: personalInfo.researchGate, icon: Flask },
        { label: 'ORCID', url: personalInfo.orcidUrl, icon: ArrowSquareOut }
    ];

    return (
        <div className="page-wrap">
            <div className="container space-y-10">
                <div className="page-intro text-center">
                    <span className="section-kicker mx-auto">Contact</span>
                    <h1 className="page-title">Contact and collaboration</h1>
                    <p className="page-lead mx-auto">Available for research collaboration, invited lectures, academic consultation, and interdisciplinary projects.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch">
                    <div className="glass-panel p-5 md:p-6 contact-panel flex flex-col justify-between">
                        <div className="feature-list contact-stack contact-panel-inner space-y-1">
                            <div className="feature-item contact-item relative">
                                <span className="feature-dot absolute left-0 top-1" />
                                <div className="pl-5">
                                    <p className="contact-label">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="contact-value">{personalInfo.email}</a>
                                </div>
                            </div>

                            <div className="feature-item contact-item relative">
                                <span className="feature-dot absolute left-0 top-1" />
                                <div className="pl-5">
                                    <p className="contact-label">Phone</p>
                                    <a href={`tel:${personalInfo.phone}`} className="contact-value">{personalInfo.phone}</a>
                                </div>
                            </div>

                            <div className="feature-item contact-item relative">
                                <span className="feature-dot absolute left-0 top-1" />
                                <div className="pl-5">
                                    <p className="contact-label">Location</p>
                                    <p className="contact-value">{personalInfo.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="tag-row contact-links contact-panel-inner mt-2.7">
                            {links.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="btn-secondary contact-link-pill">
                                        <Icon size={14} weight="bold" /> {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cta-banner contact-cta flex flex-col justify-between p-6 md:p-10 bg-[var(--surface-secondary)] rounded-xl border border-[var(--border-color)]">
                        <div className="space-y-3">
                            <span className="section-kicker">Availability</span>
                            <h2 className="contact-cta-title text-2xl">Available for academic and research engagement.</h2>
                            <p className="text-[var(--text-secondary)]">
                                Enquiries related to artificial intelligence, robotics, biometric systems, healthcare technologies, and blockchain applications are welcome.
                            </p>
                        </div>
                        <a href={`mailto:${personalInfo.email}`} className="btn-primary w-fit mt-6">
                            Send email <EnvelopeSimple size={14} weight="bold" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
