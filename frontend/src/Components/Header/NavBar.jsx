import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/public/EhmLogo.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-green-800 text-xl tracking-wide">EHM</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-green-900 font-medium hover:text-green-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-900 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 z-40 animate-fade-in">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-green-900 font-semibold text-lg hover:text-green-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
