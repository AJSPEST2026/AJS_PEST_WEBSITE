import React from 'react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const services = [
    'Cockroach Control',
    'Termite Control',
    'Bed Bug Control',
    'Mosquito Control',
    'Wood Borer Control',
    'Rodent Control',
    'Commercial AMC',
  ];

  const areas = [
    'Vijayanagar',
    'Sanjeevininagar',
    'Mudalapalya',
    'Rajajinagar',
    'Magadi Road',
    'Basaveshwaranagar',
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1 – Brand */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-wrap">
            <Logo size="default" className="ajs-logo--footer" />
          </div>
          <p className="footer-desc">
            Founded by Jagadish Ayyappa, AJS Pest Control Solutions delivers
            reliable, eco-friendly pest management services across Bangalore
            with a commitment to customer satisfaction.
          </p>
          <div className="social-links">
            <a href="#" className="social-circle" aria-label="Facebook">f</a>
            <a href="#" className="social-circle" aria-label="LinkedIn">in</a>
            <a href="#" className="social-circle" aria-label="WhatsApp">w</a>
          </div>
        </div>

        {/* Column 2 – Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            {services.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Service Areas */}
        <div className="footer-col">
          <h4 className="footer-heading">Service Areas</h4>
          <ul className="footer-links">
            {areas.map((area) => (
              <li key={area}>
                <a href="#areas">{area}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <a href="tel:+919035493416">+91 90354 93416</a>
                <br />
                <a href="tel:+919844494476">+91 98444 94476</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:ajspestcontrol147@gmail.com">
                ajspestcontrol147@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>
                # 2043/C, 1st Main, 3rd Cross, Sanjeevininagar, Mudalapalya,
                Vijayanagar, Bengaluru – 560 072
              </p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <p>Mon–Sat: 8AM – 8PM<br />Sun: 9AM – 5PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 AJS Pest Control Solutions, Bengaluru. All rights reserved.</p>
        <p>PCAI Licensed · ISO 9001:2015 Certified</p>
      </div>
    </footer>
  );
};

export default Footer;
