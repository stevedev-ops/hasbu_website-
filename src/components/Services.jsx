import React, { useState } from 'react';

const services = [
  {
    icon: '📋',
    title: 'IPM Audits',
    desc: 'Comprehensive Integrated Pest Management audits evaluating your current strategies against international health and safety standards.',
    details: 'Our IPM audits include: Thorough on-site inspections, identification of pest entry points, sanitation & hygiene audits, and structural vulnerability assessments. We focus on long-term prevention with minimal chemical use.',
    clients: 'Essential for: Restaurants, Hotels, Hospitals, and Food Processing Plants.'
  },
  {
    icon: '📜',
    title: 'Nairobi Pay Certification',
    desc: 'Expert guidance applying for Pest Control Service certificates through the Nairobi City County Government\'s Nairobi Pay portal.',
    details: 'We help you navigate the NCCG digital portal, ensuring your application is complete. From selecting "HASBU Pest Control Ltd" to final verification, we make the process stress-free.',
    clients: 'Essential for: Schools, Offices, Malls, and Residential Complexes.'
  },
  {
    icon: '🛡️',
    title: 'Compliance Oversight',
    desc: 'Ongoing monitoring and documentation to maintain compliance with PCPB, NEMA, and county health regulations.',
    details: 'Regular check-ins and documentation updates to ensure you are always ready for an official government inspection. We handle the paperwork so you can handle your business.',
    clients: 'Essential for: Warehouses, Industrial Sites, and High-Traffic Public Spaces.'
  },
  {
    icon: '👥',
    title: 'Professional Consulting',
    desc: 'Tailored advice on pest control best practices for commercial, industrial, and residential facilities across Nairobi.',
    details: 'Specialized training for your staff on hygiene best practices and IPM awareness. We provide custom strategies for high-risk environments like commercial kitchens and food processing plants.',
    clients: 'Essential for: Real Estate Managers, Facility Directors, and HR Departments.'
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title centered">Professional Pest Control Services</h2>
          <p className="section-subtitle centered">
            End-to-end solutions for pest management, compliance auditing, and county government certification support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              
              <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {s.clients}
              </p>

              {expandedIndex === i && (
                <div className="service-details">
                  {s.details}
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <button 
                  className="learn-more-btn" 
                  onClick={() => toggleExpand(i)}
                  style={{ marginTop: 0 }}
                >
                  {expandedIndex === i ? 'Show Less' : 'Learn More'} {expandedIndex === i ? '▲' : '▼'}
                </button>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
