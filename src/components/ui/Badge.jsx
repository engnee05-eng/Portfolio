import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    // Map variants to CSS variables or standard utility classes
    const variants = {
        primary: 'bg-[rgba(var(--accent-primary-rgb),0.1)] text-[var(--accent-primary)]',
        secondary: 'bg-[rgba(232,93,4,0.1)] text-[#e85d04]',
        tertiary: 'bg-[rgba(249,115,22,0.1)] text-[#f97316]',
        neutral: 'bg-neutral',
        success: 'bg-[rgba(16,185,129,0.1)] text-[#10b981]'
    };

    return (
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant] || variants.primary} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;