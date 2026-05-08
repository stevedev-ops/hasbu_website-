import React from 'react';

const checklistItems = [
  { title: "Business Documents", desc: "Valid Business Registration Certificate or Incorporation documents." },
  { title: "Tax Compliance", desc: "Current KRA PIN and Tax Compliance Certificate." },
  { title: "Nairobi Pay Account", desc: "Functional login credentials for your individual or organization portal." },
  { title: "Premises Sanitation", desc: "Ensure floors, drainage, and waste disposal areas are clean and accessible." },
  { title: "Structural Integrity", desc: "Check for cracks in walls or gaps under doors that pests could enter through." },
  { title: "Existing Records", desc: "Have any previous pest control or health inspection records ready for review." }
];

const Checklist = () => {
  return (
    <section id="checklist" className="bg-bg-alt">
      <div className="container">
        <div className="services-header">
          <div className="section-label">Preparation</div>
          <h2 className="section-title centered">How to Prepare for Your Application</h2>
          <p className="section-subtitle centered">
            A high-value checklist to ensure your business is ready for the IPM audit and Nairobi Pay certification process.
          </p>
        </div>

        <div className="checklist-grid">
          {checklistItems.map((item, index) => (
            <div key={index} className="checklist-item">
              <span className="checklist-check">✔️</span>
              <div>
                <h4 className="about-card-title">{item.title}</h4>
                <p className="about-card-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn btn-outline" 
            onClick={() => window.print()}
          >
            🖨️ Print as PDF Checklist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
