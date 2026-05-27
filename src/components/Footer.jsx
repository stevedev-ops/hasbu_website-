import React from 'react';

const Footer = ({ onShowPrivacy, onShowTerms }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo-text">
              <img src="/logo.png" alt="Hasbu Investment Limited" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Leading the way in Integrated Pest Management auditing and compliance for businesses in Nairobi and beyond.
            </p>
            <div className="social-icons" style={{ marginTop: '1.5rem' }}>
              <a href="https://wa.me/254706176280" className="social-icon" title="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
              <a href="mailto:info@hasbu.co.ke" className="social-icon" title="Email">✉️</a>
              <a href="tel:+254706176280" className="social-icon" title="Call">📞</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#procedure">Certification Guide</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="footer-col-title">Resources</div>
            <div className="footer-links">
              <a href="https://nairobiservices.go.ke/login" target="_blank" rel="noopener noreferrer">
                Nairobi Pay Portal
              </a>
              <a href="https://www.pcpb.go.ke" target="_blank" rel="noopener noreferrer">PCPB Guidelines</a>
              <a href="https://www.nema.go.ke" target="_blank" rel="noopener noreferrer">NEMA Compliance</a>
              <a href="https://www.ppra.go.ke" target="_blank" rel="noopener noreferrer">PPRA Standards</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-links">
              <a href="tel:+254706176280">📞 +254 706 176280</a>
              <a href="mailto:info@hasbu.co.ke">✉️ info@hasbu.co.ke</a>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>📍 Nairobi, Kenya</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontStyle: 'italic', marginTop: '1.5rem' }}>
              "Excellence in every audit."
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hasbu Limited. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button onClick={onShowPrivacy} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}>Privacy Policy</button>
            <button onClick={onShowTerms} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
