import React from 'react';

const steps = [
  { text: <><strong>Log in</strong> to your individual/organization Nairobi Pay Portal account.</> },
  { text: <>Navigate to <strong>Health Services</strong> and select <strong>Pest Control Services</strong>.</> },
  { text: <>Complete all required fields <strong>accurately</strong>.</> },
  { text: <>Select <strong>HASBU Pest Control Ltd</strong> as your designated service provider.</> },
  { text: <><strong>Review and verify</strong> all submitted information.</> },
  { text: <>Submit your application and click <strong>Finish</strong>.</> },
];

const Procedure = () => {
  return (
    <section id="procedure">
      <div className="container">
        <div className="procedure-grid">
          {/* Left */}
          <div>
            <div className="section-label procedure-label">Nairobi Pay Portal</div>
            <h2 className="section-title procedure-title">How to Apply for Certification</h2>
            <p className="section-subtitle procedure-subtitle">
              The entire process usually takes <strong>3 to 7 working days</strong>. Follow these steps on the official portal, or let our experts handle the submission for you.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <a
                href="https://nairobiservices.go.ke/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                🔗 Open Nairobi Pay Portal
              </a>
              <a href="#contact" className="btn btn-white" style={{ background: 'white', color: 'var(--primary)' }}>
                ✨ We can submit for you
              </a>
            </div>
            <p className="procedure-cta-note">
              Opens nairobiservices.go.ke — the official NCCG payment portal.
            </p>
          </div>

          {/* Right — Steps */}
          <div>
            <div className="steps-list">
              {steps.map((step, i) => (
                <div className="step-item" key={i}>
                  <div className="step-num">{i + 1}</div>
                  <p className="step-text">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="step-highlight" style={{ background: 'rgba(201,162,39,0.3)', borderColor: 'var(--accent)' }}>
              <span className="step-highlight-icon">🚀</span>
              <p><strong>Overwhelmed?</strong> We can handle the entire Nairobi Pay submission for you to ensure 100% approval. <a href="#contact" style={{ color: 'white', textDecoration: 'underline' }}>Request full submission assistance.</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
