import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <Logo size={scrolled ? 'small' : 'default'} />
        </a>

        {/* Desktop Nav Links */}
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#why" onClick={closeMenu}>Why Us</a></li>
          <li><a href="#process" onClick={closeMenu}>Process</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
          <li className="navbar__links-cta-mobile">
            <a href="tel:+919035493416" className="navbar__cta" onClick={closeMenu}>
              Call Now
            </a>
          </li>
        </ul>

        {/* CTA Button (desktop) */}
        <a href="tel:+919035493416" className="navbar__cta navbar__cta--desktop">
          Call Now
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
