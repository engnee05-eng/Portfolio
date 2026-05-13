import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, ArrowSquareOut } from '@phosphor-icons/react';
import { cvData } from '../../data/cvData';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/academics', label: 'Mentorship & Leadership' },
        { path: '/publication', label: 'Research & Publications' },
        { path: '/conferences', label: 'Conferences' },
        { path: '/patents', label: 'Patents' },
        { path: '/media', label: 'Media' },
        { path: '/contact', label: 'Contact' }
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo-block" aria-label="Go to homepage">
                    <span className="logo-mark">ST</span>
                    <div>
                        <span className="logo-title">Dr. Sumegh S. Tharewal</span>
                        <span className="logo-subtitle">AI | Biometrics | Blockchain</span>
                    </div>
                </Link>

                <nav className="nav-links desktop-only" aria-label="Primary navigation">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={(e) => {
                                if (location.pathname === link.path) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                                closeMobileMenu();
                            }}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <a
                        href={`${import.meta.env.BASE_URL}${cvData.personalInfo.cvPath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="cv-btn"
                    >
                        Download CV <ArrowSquareOut size={18} weight="bold" />
                    </a>
                </nav>

                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-shell">
                    <nav className="container mobile-overlay" aria-label="Mobile navigation">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => {
                                    if (location.pathname === link.path) {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                    closeMobileMenu();
                                }}
                                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <a
                            href={`${import.meta.env.BASE_URL}${cvData.personalInfo.cvPath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                            className="cv-btn mobile-cv-btn"
                        >
                            Download CV <ArrowSquareOut size={18} weight="bold" />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
