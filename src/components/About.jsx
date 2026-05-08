import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left content */}
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">About Hasbu Limited</h2>
            <p className="about-text about-subtitle">
              Based in the heart of Nairobi, Hasbu Limited is a specialized environmental safety firm dedicated to Integrated Pest Management (IPM) auditing. We simplify the complexities of the Nairobi Pay portal for businesses, transforming compliance from a hurdle into a standard of excellence.
            </p>
            <p className="about-text">
              Hasbu Limited is proud to be a <strong>Subcontracted Partner of the Nairobi City County Government (NCCG)</strong>. Our primary role is to assist the county in ensuring public health safety by conducting Integrated Pest Management (IPM) audits for businesses across the city. As a registered service provider, we ensure that every commercial kitchen, warehouse, and office in Nairobi operates in a pest-free, healthy environment through professional auditing and certification support.
            </p>
            <div className="compliance-badges">
              <span className="badge">✅ PCPB Registered</span>
              <span className="badge">✅ NEMA Compliant</span>
              <span className="badge">✅ NCCG Accredited</span>
              <span className="badge">✅ Nairobi Pay Listed</span>
            </div>
          </div>

          {/* Right cards */}
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">🔭</div>
              <div className="about-card-title">Our Vision</div>
              <p className="about-card-text">To be the cornerstone of Nairobi's public health safety, ensuring every business achieves 100% compliance with county government pest control standards.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🎯</div>
              <div className="about-card-title">Our Mission</div>
              <p className="about-card-text">Ensuring Nairobi's commercial kitchens, warehouses, and offices meet the highest health standards through rigorous IPM auditing and Nairobi Pay support.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">💎</div>
              <div className="about-card-title">Our Values</div>
              <p className="about-card-text">Integrity, Nairobi-specific expertise, and environmental responsibility in every audit we perform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
