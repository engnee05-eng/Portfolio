import { useEffect } from 'react';
import { Shield, FileText, Globe, Calendar } from '@phosphor-icons/react';
import SectionHeader from '../components/ui/SectionHeader';
import { cvData } from '../data/cvData';

export default function Patents() {
    useEffect(() => {
        document.title = 'Patents | Dr. Sumegh S. Tharewal';
    }, []);

    const { patents } = cvData;
    const granted = patents.filter((item) => item.status === 'Granted').length;
    const countries = [...new Set(patents.map((item) => item.country))].length;

    return (
        <div className="page-wrap">
            <div className="container space-y-10">
                <div className="page-intro text-center">
                    <span className="section-kicker mx-auto">Intellectual property</span>
                    <h1 className="page-title">Patent and IP portfolio</h1>
                    <p className="page-lead mx-auto">Granted and published patent work across artificial intelligence, IoT, biometrics, and decentralized systems.</p>
                </div>

                <div className="card-grid-4">
                    {patents?.map((patent, index) => (
                        <article key={index} className="card-scientific flex h-full flex-col p-6 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${patent.status === 'Granted' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                    {patent.status === 'Granted' ? <Shield size={24} weight="duotone" /> : <FileText size={24} weight="duotone" />}
                                </div>
                                <span className="text-xs font-bold text-[var(--text-muted)] tracking-widest">IP-{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-extrabold leading-snug bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-indigo-500 transition-all duration-300">{patent.title}</h3>
                                <div className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--accent-soft)] border border-[var(--accent-secondary)]/20 shadow-sm">
                                    <Shield size={12} weight="fill" className="text-[var(--accent)]" />
                                    <span className="text-[12.2px] font-bold font-mono text-[var(--accent)] tracking-wider uppercase">
                                        Patent Id: {patent.id}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Globe size={16} className="text-[var(--text-muted)]" />
                                    <span className="text-xs font-semibold text-[var(--text-secondary)]">{patent.country || 'International'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[var(--text-muted)]" />
                                    <span className="text-xs font-semibold text-[var(--text-secondary)]">{patent.year || '2024'}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <section className="glass-panel p-5 md:p-6">
                    <SectionHeader
                        title="Portfolio summary"
                        subtitle="Selected summary indicators for the current patent list."
                        centered={false}
                    />
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <div className="metric-value">{patents.length}</div>
                            <div className="text-sm text-[var(--text-muted)]">Items shown</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">{granted}</div>
                            <div className="text-sm text-[var(--text-muted)]">Granted patents</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">{countries}</div>
                            <div className="text-sm text-[var(--text-muted)]">Jurisdictions represented</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
