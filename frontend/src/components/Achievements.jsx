import React from 'react';
import { resumeData } from '../data/resume';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <h2>Extra-curricular <span className="text-highlight">Achievements</span></h2>
        <p>Tournaments, badges, and extra-curricular accolades.</p>
      </div>

      <div className="achievements-grid">
        {resumeData.achievements.map((acc, idx) => (
          <div key={idx} className="achievement-card glass animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="achievement-icon">🏆</div>
            <div className="achievement-info">
              <h4>{acc.title}</h4>
              {(acc.issuer || acc.date) && (
                <p className="achievement-meta">
                  {acc.issuer && <span>{acc.issuer}</span>}
                  {acc.issuer && acc.date && <span> &bull; </span>}
                  {acc.date && <span>{acc.date}</span>}
                </p>
              )}
            </div>
            {acc.file && (
              <a href={`/certificates/${acc.file}`} download className="btn btn-secondary achievement-btn">
                Download Image
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
