import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the difference between PCPB and NCCG (Nairobi Pay) certification?",
    answer: "The PCPB (Pest Control Products Board) is a national body that regulates the chemicals and the licensing of pest control companies. The NCCG (Nairobi City County Government) requires a local service certification specifically for your business premises. You need the NCCG certificate via Nairobi Pay to legally operate a business in the city, which is only granted after a successful IPM audit."
  },
  {
    question: "I already have a pest control provider. Why do I need an IPM audit from Hasbu?",
    answer: "Most providers offer treatment, but not all are certified auditors. The County Government requires an independent Integrated Pest Management (IPM) audit to verify that your premises meet public health standards. Hasbu Limited provides the official audit and documentation required by Nairobi Pay to approve your certification."
  },
  {
    question: "Is a PCPB license enough to satisfy the County inspectors?",
    answer: "No. While a PCPB license is mandatory for the company performing the work, the business owner must still obtain a County Pest Control Service Certificate. This certificate is what inspectors look for during health compliance checks, and it is applied for through the Nairobi Pay portal."
  },
  {
    question: "My business was fined — can you help urgently?",
    answer: "Yes. We prioritize urgent cases where businesses have been flagged by the Nairobi City County Government (NCCG). We can conduct an immediate on-site audit and guide you through the corrective measures to lift the fine and ensure compliance."
  },
  {
    question: "Do you submit the Nairobi Pay application for us?",
    answer: "While the final submission must be done from your organization's official Nairobi Pay account, we provide full support. We guide you step-by-step through the portal, ensuring you complete all fields correctly and select 'HASBU Pest Control Ltd' as your designated provider."
  },
  {
    question: "How long until I get my certificate?",
    answer: "Once the audit is complete and the application is submitted through Nairobi Pay, the certificate processing time depends on the county's review. Usually, it takes between 3 to 7 working days, provided all compliance standards are met."
  },
  {
    question: "Is the audit done on-site?",
    answer: "Yes. To ensure Integrated Pest Management (IPM) standards are met, our certified auditors must physically inspect your premises. This allows us to identify structural vulnerabilities, sanitation issues, and pest entry points accurately."
  },
  {
    question: "What documents do I need for the audit?",
    answer: "Typically, you will need your business registration documents, KRA PIN, and any previous health or pest control records. We will provide a specific list tailored to your business type before our visit."
  },
  {
    question: "What happens if an audit fails?",
    answer: "If your premises do not meet the required IPM standards, we don't just leave you there. We provide a detailed 'Corrective Action Plan' and work with you to fix the issues, then conduct a follow-up audit to ensure you pass the official certification."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white">
      <div className="container">
        <div className="services-header">
          <div className="section-label">Questions</div>
          <h2 className="section-title centered">Frequently Asked Questions</h2>
          <p className="section-subtitle centered">
            Common questions about the Nairobi Pay certification process, audit procedures, and compliance requirements.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">▼</span>
              </button>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
