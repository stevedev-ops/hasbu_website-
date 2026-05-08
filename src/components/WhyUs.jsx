import React from 'react';

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-white">
      <div className="container">
        <div className="about-grid">
          <div className="hero-image-wrap">
            <div className="nav-logo-icon" style={{ width: '100%', height: '400px', fontSize: '10rem', borderRadius: '24px' }}>🛡️</div>
            <div className="hero-badge-card" style={{ bottom: '2rem', left: '2rem' }}>
              <div className="hero-badge-icon">🌿</div>
              <div>
                <div className="hero-badge-label">10+ Years Experience</div>
                <div className="hero-badge-sublabel">Expert IPM Auditors</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">Trusted Expertise in Pest Control & Compliance</h2>
            <p className="about-text">
              At Hasbu Limited, we don't just provide a service; we provide peace of mind. Our team of certified professionals has over a decade of experience navigating Kenya's regulatory landscape.
            </p>
            
            <ul className="footer-links" style={{ color: 'var(--text)', gap: '1.5rem', marginTop: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="step-num" style={{ width: '24px', height: '24px', fontSize: '0.7rem' }}>✓</span>
                <strong>PCPB Certified:</strong> We operate under full license from the Pest Control Products Board.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="step-num" style={{ width: '24px', height: '24px', fontSize: '0.7rem' }}>✓</span>
                <strong>Expert Auditors:</strong> Trained in the latest Integrated Pest Management (IPM) standards.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="step-num" style={{ width: '24px', height: '24px', fontSize: '0.7rem' }}>✓</span>
                <strong>Official NCCG Sub-contractor:</strong> Directly appointed by the county government to facilitate IPM auditing and certification.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="step-num" style={{ width: '24px', height: '24px', fontSize: '0.7rem' }}>✓</span>
                <strong>Urgent Support:</strong> Dedicated team for businesses facing fines or immediate compliance deadlines.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
