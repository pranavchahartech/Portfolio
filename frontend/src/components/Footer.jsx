import React from 'react';
import { resumeData } from '../data/resume';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="glass footer-section">
      <div className="footer-content">
        <div className="footer-logo gradient-text">PC.</div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </p>
        <div className="footer-social">
          <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
