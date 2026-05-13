const SectionHeader = ({ title, subtitle, kicker, centered = true }) => {
    return (
        <div className={`section-header ${centered ? 'text-center' : ''}`}>
            <div className={centered ? 'section-header-inner section-header-centered' : 'section-header-inner'}>
                {kicker && <span className="section-kicker">{kicker}</span>}
                <h2 className="section-header-title">{title}</h2>
                {subtitle && <p className="section-header-copy">{subtitle}</p>}
                <div className={`section-line ${centered ? 'mx-auto' : ''}`} />
            </div>
        </div>
    );
};

export default SectionHeader;
