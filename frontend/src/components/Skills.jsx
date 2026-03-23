import React from 'react';
import { resumeData } from '../data/resume';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies and tools I work with.</p>
      </div>
      
      <div className="skills-container">
        {Object.entries(resumeData.skills).map(([category, skills], idx) => (
          <div key={category} className="skill-category glass animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <h3 className="category-title">{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
            <div className="skill-tags">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
