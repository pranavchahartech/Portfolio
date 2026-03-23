import React from 'react';
import { resumeData } from '../data/resume';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work and experiments.</p>
      </div>
      
      <div className="projects-grid">
        {resumeData.projects.map((project, idx) => (
          <div key={idx} className="project-card glass animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
            <div className="project-content">
              <span className="project-date">{project.date}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {/* Action Area */}
            <div className="project-actions">
              <a href={project.link} className="btn-secondary" style={{width: '100%', textAlign: 'center'}}>View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
