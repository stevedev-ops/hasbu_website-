import React from 'react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu open" style={{ padding: '2rem', overflowY: 'auto', display: 'block', backgroundColor: 'var(--white)' }}>
      <button className="mobile-menu-close" onClick={onClose}>✕</button>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <h2 className="section-title">Privacy Policy</h2>
        <p className="about-text"><strong>Last Updated: May 2026</strong></p>
        
        <h3 className="service-title">1. Information We Collect</h3>
        <p className="about-text">We collect information you provide directly to us through our contact forms, audit requests, and WhatsApp interactions. This may include your name, email address, phone number, and business details.</p>
        
        <h3 className="service-title">2. How We Use Your Information</h3>
        <p className="about-text">We use the information we collect to:
          <ul>
            <li>Process your IPM audit requests.</li>
            <li>Assist with Nairobi Pay certification applications.</li>
            <li>Send you updates regarding your compliance status.</li>
            <li>Respond to your inquiries.</li>
          </ul>
        </p>

        <h3 className="service-title">3. Data Security</h3>
        <p className="about-text">We implement industry-standard security measures to protect your personal and business data. However, no method of transmission over the internet is 100% secure.</p>

        <h3 className="service-title">4. Third-Party Sharing</h3>
        <p className="about-text">We share data with the Nairobi City County Government (NCCG) only as required to facilitate your certification process through the Nairobi Pay portal.</p>

        <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem' }}>Close Policy</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
