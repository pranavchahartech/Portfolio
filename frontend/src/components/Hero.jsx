import React from 'react';
import { resumeData } from '../data/resume';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Eye-catching background graphic animations */}
      <div className="hero-graphics">
        <div className="shape shape-circle animate-float delay-100"></div>
        <div className="shape shape-ring animate-spin-slow"></div>
        <div className="shape shape-square animate-float delay-200"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            {resumeData.personal.name}
          </h1>
          <h2 className="hero-subtitle animate-fade-in-up delay-100">
            <span className="text-highlight">{resumeData.personal.title}</span> &bull; Web Enthusiast
          </h2>
          <p className="hero-description animate-fade-in-up delay-200">
            {resumeData.personal.summary}
          </p>
          <div className="hero-buttons animate-fade-in-up delay-200">
          <a href="/Pranav_Chahar_CV.pdf" download className="btn btn-primary">Download CV</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up delay-200">
          <div className="image-frame">
            <img src="/Profile.jpg" alt="Pranav Chahar" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
