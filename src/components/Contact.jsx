import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left info */}
          <div className="contact-info">
            <div className="section-label">Contact Us</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to schedule your IPM audit or need help with your Nairobi Pay certification? Our team is ready to assist.
            </p>

            <div className="contact-info-items">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">+254 061 762 80</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">info@hasbu.co.ke</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Nairobi, Kenya</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div>
                  <div className="contact-item-label">Nairobi Pay Portal</div>
                  <div className="contact-item-value">
                    <a
                      href="https://nairobiservices.go.ke/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                    >
                      nairobiservices.go.ke
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group form-group-full">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" type="text" placeholder="John Doe" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-control" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" type="tel" placeholder="+254 700 000 000" required />
                  </div>
                </div>
                <div className="form-group form-group-full">
                  <label className="form-label">Subject</label>
                  <select className="form-control">
                    <option>IPM Audit Booking</option>
                    <option>Nairobi Pay Certification Help</option>
                    <option>Compliance Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group form-group-full">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message ✉️
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
