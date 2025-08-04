import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <img 
          src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png" 
          alt="EHM Logo" 
          className="logo"
        />
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={handleNavClick}>HOME</a></li>
            <li><a href="#about" className="nav-link" onClick={handleNavClick}>ABOUT US</a></li>
            <li><a href="#our-offerings" className="nav-link" onClick={handleNavClick}>OUR OFFERINGS</a></li>
            <li><a href="#projects" className="nav-link" onClick={handleNavClick}>PROJECTS</a></li>
            <li><a href="#resources" className="nav-link" onClick={handleNavClick}>RESOURCES</a></li>
            <li><a href="#career" className="nav-link" onClick={handleNavClick}>CAREER</a></li>
            <li><a href="#contact-us" className="nav-link" onClick={handleNavClick}>CONTACT US</a></li>
          </ul>
          
          <div className="nav-decoration nav-decoration-1">
            <img 
              src="https://png.pngtree.com/png-vector/20240907/ourmid/pngtree-green-planet-earth-symbolizing-environmental-sustainability-png-image_13746543.png" 
              alt="Sustainability" 
              className="decoration-img"
            />
          </div>
          
          <div className="nav-decoration nav-decoration-2">
            <img 
              src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-a-plant-above-the-planet-earth-white-background-png-image_11285406.png" 
              alt="Earth Plant" 
              className="decoration-img"
            />
          </div>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`ri-menu-4-line ${isMenuOpen ? 'ri-close-large-line' : ''}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;