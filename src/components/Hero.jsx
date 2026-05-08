import React from 'react';
import heroImage from '../assets/hero_audit.png';

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="fade-up">
            <div className="hero-badge">Official NCCG Subcontracted Partner — Nairobi, Kenya</div>
            <h1 className="hero-title">
              Protecting Your Business Through <span className="highlight">Pest Control</span> Excellence.
            </h1>
            <p className="hero-subtitle">
              The official subcontracted partner for Nairobi City County Government (NCCG). We provide professional IPM audits and handle your Nairobi Pay certification from start to finish.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Book an Audit Now</a>
              <a href="#procedure" className="btn btn-outline">Nairobi Pay Guide →</a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">PCPB Compliant</div>
              </div>
              <div>
                <div className="hero-stat-num">NCCG</div>
                <div className="hero-stat-label">Accredited Partner</div>
              </div>
              <div>
                <div className="hero-stat-num">IPM</div>
                <div className="hero-stat-label">Certified Auditors</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-wrap fade-in">
            <img src={heroImage} alt="Professional IPM Audit in progress" />
            <div className="hero-badge-card">
              <div className="hero-badge-icon" aria-hidden="true">🏆</div>
              <div>
                <div className="hero-badge-label">Certified Compliance</div>
                <div className="hero-badge-sublabel">Industry Standard Audits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
