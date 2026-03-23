import React from 'react';
import { resumeData } from '../data/resume';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About <span className="text-highlight">Me</span></h2>
        <p>My academic background and core strengths.</p>
      </div>

      <div className="about-content-grid">
        <div className="about-narrative">
          <p>
            I am a passionate <span className="text-highlight">Full Stack Developer</span> dedicated to building efficient, scalable applications. With a strong foundation in <span className="text-highlight">Data Structures and Algorithms</span>, I enjoy solving complex problems and turning innovative ideas into functional realities using modern web technologies like React and Node.js.
          </p>
          
          <h3 className="column-title" style={{marginTop: '40px'}}>Education</h3>
          <div className="timeline">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="timeline-item glass animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">{edu.duration}</div>
                <h4 className="timeline-title">{edu.degree}</h4>
                <p className="timeline-org">{edu.institution} - {edu.location}</p>
                <p className="timeline-score">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-cards-grid">
          <div className="feature-card glass">
            <div className="feature-icon">🧩</div>
            <h4>Problem Solving</h4>
            <p>Tackling complex coding challenges logically and efficiently.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🤝</div>
            <h4>Team Player</h4>
            <p>Collaborating seamlessly in agile engineering environments.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">⚡</div>
            <h4>Adaptability</h4>
            <p>Quickly learning and applying bleeding-edge technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
