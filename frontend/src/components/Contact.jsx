import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Network error. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass animate-fade-in-up">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>If you'd like to get in touch, feel free to reach out through the form below or email me directly.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href={`mailto:${resumeData.personal.email}`} className="contact-value hover-cyan">{resumeData.personal.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Mobile</span>
              <span className="contact-value">{resumeData.personal.mobile}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Links</span>
              <div className="social-links">
                <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover-cyan">GitHub</a>
                <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover-cyan">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="form-input" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="form-input" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="form-input" placeholder="Hello Pranav..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
          {status === 'error' && <p className="error-msg">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
