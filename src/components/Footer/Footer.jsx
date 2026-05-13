import { ArrowSquareOut, EnvelopeSimple, GraduationCap, LinkedinLogo, MapPin, Phone, CaretRight, BookOpen, Users, Video, Certificate, UserList } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { cvData } from '../../data/cvData';

export default function Footer() {
    const { personalInfo } = cvData;
    const year = new Date().getFullYear();

    const navLinks = [
        { label: 'About', to: '/about', icon: UserList },
        { label: 'Mentorship', to: '/academics', icon: Users },
        { label: 'Research & Publications', to: '/publication', icon: BookOpen },
        { label: 'Conferences', to: '/conferences', icon: ArrowSquareOut },
        { label: 'Patents', to: '/patents', icon: Certificate },
        { label: 'Media', to: '/media', icon: Video },
    ];

    return (
        <footer className="w-full px-4 pb-4 pt-6">
            <div className="max-w-7xl mx-auto">
                {/* Main Glass Card */}
                <div className="relative group bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
                    {/* Accent Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Left Column: Brand & Bio */}
                        <div className="lg:col-span-5 p-6 md:p-7 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                    Academic Portfolio
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                                        {personalInfo.name}
                                    </h2>
                                    <p className="mt-4 text-slate-500 font-medium leading-relaxed max-w-md">
                                        Bridging the gap between AI research and practical systems in biometrics, robotics, and blockchain.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <SocialBtn href={personalInfo.linkedin} icon={<LinkedinLogo weight="fill" size={20} />} label="LinkedIn" />
                                    <SocialBtn href={personalInfo.googleScholar} icon={<GraduationCap weight="fill" size={20} />} label="Scholar" />
                                    <SocialBtn href={`mailto:${personalInfo.email}`} icon={<EnvelopeSimple weight="bold" size={20} />} label="Email" />
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Navigation & Contact */}
                        <div className="lg:col-span-7 p-4 md:p-7 space-y-1">
                            {/* Quick Navigation */}
                            <div>
                                <h3 className="text-[15px] font-black uppercase tracking-[0.2em] text-indigo-500 mb-6">Explore Directory</h3>
                                <div className="grid grid-cols-2 pt-2 md:grid-cols-3 gap-y-4 gap-x-8">
                                    {navLinks.map((link) => (
                                        <Link key={link.to} to={link.to} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold text-base transition-colors group/link">
                                            <link.icon size={28} weight="duotone" className="text-slate-400 group-hover/link:text-indigo-500" />
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Contact Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <ContactInfo icon={<MapPin weight="duotone" />} title="Location" value={personalInfo.address} />
                                <ContactInfo icon={<Phone weight="duotone" />} title="Contact" value={personalInfo.phone} />
                            </div>
                        </div>
                    </div>
                    {/* Bottom Bar */}
                    <div className="px-4 pt-1 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-600 text-xs font-medium"> © {year} {personalInfo.name}. Built with Precision. </p>
                        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            <Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link>
                            <span className="text-slate-800">|</span>
                            <a href={personalInfo.cvPath} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Sub-components for cleaner code
function SocialBtn({ href, icon, label }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
            {icon}
        </a>
    );
}

function ContactInfo({ icon, title, value }) {
    return (
        <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-500 shadow-sm">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-tight text-slate-500">{title}</p>
                <p className="text-sm font-bold text-slate-800">{value}</p>
            </div>
        </div>
    );
}
