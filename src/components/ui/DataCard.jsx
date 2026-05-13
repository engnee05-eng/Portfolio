const DataCard = ({ title, institution, duration, details, highlight, link, className = '' }) => {
    return (
        <article className={`timeline-card ${className}`.trim()} style={{ borderLeft: '4px solid rgba(124, 58, 237, 0.22)' }}>
            <div className="premium-meta data-card-meta">
                {highlight && <span className="section-kicker">{highlight}</span>}
                {duration && <span className="premium-id timeline-duration">{duration}</span>}
            </div>
            <div className="data-card-body">
                <div className="compact-stack ">
                    <h3 className="lux-title">{title}</h3>
                    {institution && <p className="lux-subtitle">{institution}</p>}
                </div>
                <div className="lux-divider" />
                {details && <p className="lux-copy">{details}</p>}
            </div>
            {link && (
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit">
                        View more
                    </a>
                </div>
            )}
        </article>
    );
};

export default DataCard;
