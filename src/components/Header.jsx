import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-inner">
            <a href="#home" className="nav-logo">
              <div className="nav-logo-icon">🛡️</div>
              <div className="nav-logo-text">HASBU <span>LIMITED</span></div>
            </a>

            <ul className="nav-links">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#procedure" className="nav-link">How to Apply</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="btn btn-primary nav-cta">Book Audit</a></li>
            </ul>

            <button className="nav-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu}>✕</button>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
        <a href="#procedure" className="nav-link" onClick={closeMenu}>How to Apply</a>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Book Audit</a>
      </div>
    </>
  );
};

export default Header;
