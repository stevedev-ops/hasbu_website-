import React from 'react';

const WhatsAppWidget = () => {
  const phoneNumber = "254700000000"; // Replace with actual number
  const message = "Hello Hasbu Limited, I am interested in an IPM Audit/Certification assistance.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <span>💬</span>
    </a>
  );
};

export default WhatsAppWidget;
