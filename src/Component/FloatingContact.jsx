import React from "react";

const FloatingContact = () => {
  const phoneNumber = "917317422100";

  const whatsappMessage =
    "Hello, mujhe AC service ke baare me information chahiye.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <div className="floating-contact-wrapper">
        <a
          href="tel:+917317422100"
          className="floating-contact-btn call-btn"
        >
          <span className="floating-icon">📞</span>
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn whatsapp-btn"
        >
          <span className="floating-icon">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingContact;