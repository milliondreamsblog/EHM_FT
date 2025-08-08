
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
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
            <li><Link to="/" className="nav-link" onClick={handleNavClick}>HOME</Link></li>
            <li><Link to="/about" className="nav-link" onClick={handleNavClick}>ABOUT</Link></li>
            <li><Link to="/offerings" className="nav-link" onClick={handleNavClick}>OFFERINGS</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={handleNavClick}>PROJECTS</Link></li>
            <li><Link to="/Link" className="nav-link" onClick={handleNavClick}>RESOURCES</Link></li>
            <li><Link to="/career" className="nav-link" onClick={handleNavClick}>CAREER</Link></li>
            <li><Link to="contact" className="nav-link" onClick={handleNavClick}>CONTACT</Link></li>
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

export default NavBar;