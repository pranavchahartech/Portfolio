import React from 'react';
import { resumeData } from '../data/resume';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-header">
        <h2>Training & <span className="text-highlight">Certifications</span></h2>
        <p>Professional training programs and certifications I have completed.</p>
      </div>

      <div className="cert-content-grid">
        <div className="training-column glass">
          <h3 className="column-title">Training</h3>
          {resumeData.training.map((train, idx) => (
            <div key={idx} className="training-card">
              <div className="cert-date">{train.duration}</div>
              <h4>{train.title}</h4>
              <p>{train.description}</p>
              {train.file && (
                <a href={`/certificates/${train.file}`} download className="cert-link btn btn-secondary" style={{marginTop: '15px', display: 'inline-block'}}>Download Certificate</a>
              )}
            </div>
          ))}
        </div>

        <div className="certifications-column">
          <h3 className="column-title">Certifications</h3>
          <div className="cert-list">
            {resumeData.certificates.map((cert, idx) => (
              <div key={idx} className="cert-card glass animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="cert-icon">🏅</div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} {cert.date ? `• ${cert.date}` : ''}</p>
                </div>
                {/* Download link for certificate files */}
                <a href={`/certificates/${cert.file}`} download className="cert-link btn btn-secondary">Download</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
