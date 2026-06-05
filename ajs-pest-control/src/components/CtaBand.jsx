import React from 'react';
import './CtaBand.css';

const CtaBand = () => {
  return (
    <section className="cta-band" id="contact">
      <div className="cta-content">
        <h2>
          Ready for a <span>Pest-Free</span> Home
          <br />
          in Bangalore?
        </h2>

        <div className="cta-actions">
          <a href="tel:+919035493416" className="cta-btn phone-btn">
            📞 +91 90354 93416
          </a>
          <a
            href="https://wa.me/919035493416"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn btn-primary"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
