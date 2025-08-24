import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
        <header className="fixed top-0 left-0 w-full z-50 bg-white/15 backdrop-blur-md shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <img
              src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
              alt="EHM Logo"
              className="h-12"
            />
          </Link>

          {/* Menu for large screens */}
          <ul className="hidden lg:flex items-center space-x-6 font-medium text-white">
            <li>
              <Link to="/" className= " text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                ABOUT
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <span
                onClick={toggleDropdown}
                className="cursor-pointer text-green-900  hover:text-yellow-400 flex items-center"
              >
                OFFERINGS ▾
              </span>
              {isDropdownOpen && (
                <ul className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  <li>
                    <Link
                      to="/offerings/services"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/offerings/products"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/projects" className="text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                RESOURCES
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                CAREER
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-green-900  hover:text-yellow-400" onClick={handleNavClick}>
                CONTACT
              </Link>
            </li>
            {/* <li>
              {isAdminLoggedIn ? (
                <button
                  onClick={() => {
                    setShowLogin(false);
                    navigate("/admin/dashboard");
                  }}
                  className="ml-4 px-4 py-1 rounded text-[#080B18] font-medium text-sm border border-[#c8ff08] bg-[#c8ff08] hover:scale-105 transition"
                >
                  Admin Dashboard
                </button>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="ml-4 px-4 py-1 rounded text-[#080B18] font-medium text-sm border border-[#c8ff08] bg-[#c8ff08] hover:scale-105 transition"
                >
                  Admin Login
                </button>
              )}
            </li> */}
          </ul>

          {/* Mobile menu button */}
          {/* <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            <i className={ri-menu-4-line ${isMenuOpen ? "ri-close-large-line" : ""}}></i>
          </div> */}
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-3">
            <Link to="/" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              HOME
            </Link>
            <Link to="/about" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              ABOUT
            </Link>
            <div>
              <span
                onClick={toggleDropdown}
                className="block cursor-pointer text-green-900  hover:text-yellow-400"
              >
                OFFERINGS ▾
              </span>
              {isDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/offerings/services"
                    onClick={handleNavClick}
                    className="block text-green-900  hover:text-yellow-400"
                  >
                    Services
                  </Link>
                  <Link
                    to="/offerings/products"
                    onClick={handleNavClick}
                    className="block text-green-900  hover:text-yellow-400"
                  >
                    Products
                  </Link>
                </div>
              )}
            </div>
            <Link to="/projects" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              PROJECTS
            </Link>
            <Link to="/resources" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              RESOURCES
            </Link>
            <Link to="/career" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              CAREER
            </Link>
            <Link to="/contact" onClick={handleNavClick} className="block text-green-900  hover:text-yellow-400">
              CONTACT
            </Link>
          </div>
        )}
      </header>

      {/* {showLogin && (
        <AdminLoginModal onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
      )} */}
    </>
  );
};

export default NavBar;