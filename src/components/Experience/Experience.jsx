import { cvData } from '../../data/cvData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="title">Professional Experience</h2>

        <div className="exp-timeline">
          {cvData.experience.map((exp, idx) => (
            <div key={idx} className="exp-card glass-panel animate-fade-in delay-100">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-duration">
                  <i className="ph ph-calendar-blank"></i> {exp.duration}
                </span>
              </div>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
