import React from 'react';

const TermsOfService = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu open" style={{ padding: '2rem', overflowY: 'auto', display: 'block', backgroundColor: 'var(--white)' }}>
      <button className="mobile-menu-close" onClick={onClose}>✕</button>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <h2 className="section-title">Terms of Service</h2>
        <p className="about-text"><strong>Last Updated: May 2026</strong></p>
        
        <h3 className="service-title">1. Services Provided</h3>
        <p className="about-text">Hasbu Limited provides Integrated Pest Management (IPM) auditing and consultancy services for businesses applying for certificates through the Nairobi Pay portal.</p>
        
        <h3 className="service-title">2. User Responsibilities</h3>
        <p className="about-text">Users are responsible for providing accurate information in their audit requests and ensuring their premises are accessible for on-site inspections.</p>

        <h3 className="service-title">3. Nairobi Pay Portal</h3>
        <p className="about-text">Hasbu Limited assists in the application process, but the final approval and issuance of certificates are at the sole discretion of the Nairobi City County Government (NCCG).</p>

        <h3 className="service-title">4. Fees and Payments</h3>
        <p className="about-text">Fees for auditing services are independent of any statutory fees paid directly to the NCCG through Nairobi Pay.</p>

        <h3 className="service-title">5. Liability</h3>
        <p className="about-text">Hasbu Limited is not liable for any delays in the Nairobi Pay system or failures of the user to meet county health standards after the audit has been performed.</p>

        <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem' }}>Accept & Close</button>
      </div>
    </div>
  );
};

export default TermsOfService;
