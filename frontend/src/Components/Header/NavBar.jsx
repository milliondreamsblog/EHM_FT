import React, { useState, useEffect, useRef } from "react";
// The error "useContext(...) is null" is often caused by using <Link> outside of a <BrowserRouter>.
// Since we cannot wrap this component with a Router here, we are replacing <Link> with <a> tags to fix the error.
// This will make the links cause a full page refresh instead of a client-side navigation.
// import { Link } from "react-router-dom";

/*
  To use a font like 'Poppins', first add it to your project.
  For example, in your main `index.html` file, you can add this line in the <head> section:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

  Then, set it as your base font in your `tailwind.config.js` file.
*/


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
<<<<<<< HEAD
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
=======
>>>>>>> 405a8a5da27e8c0cd9c846c2958977392b678bf0
  const resourcesRef = useRef(null);
  const leaveTimer = useRef(null); // Ref to hold the timeout for the dropdown

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
        setIsGalleryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
<<<<<<< HEAD
    setIsResourcesOpen(false);
    setIsGalleryOpen(false);
=======
    setIsResourcesOpen(false); // Close dropdown when opening/closing main menu
>>>>>>> 405a8a5da27e8c0cd9c846c2958977392b678bf0
  };

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

<<<<<<< HEAD
  const toggleGallery = () => {
    setIsGalleryOpen((prev) => !prev);
  };

=======
  // Close all menus when a navigation link is clicked
>>>>>>> 405a8a5da27e8c0cd9c846c2958977392b678bf0
  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsGalleryOpen(false);
  };
  
  // Handlers for the hover effect with a delay
  const handleResourcesMouseEnter = () => {
    clearTimeout(leaveTimer.current); // Clear any pending timer to close the dropdown
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    // Set a timer to close the dropdown after a short delay
    leaveTimer.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 200); // 200ms delay
  };

  // A common style for all navigation links. On hover, the background becomes a light gray and the text turns a vibrant green.
  const navLinkStyle = "px-4 py-2 rounded-lg text-green-900 font-semibold hover:bg-gray-500/10 hover:text-green-600 transition-colors duration-300";
  const mobileNavLinkStyle = "block " + navLinkStyle;


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md font-sans">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="/" onClick={handleNavClick}>
            <img
              src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
              alt="EHM Logo"
              className="h-12 w-auto" // Added w-auto for aspect ratio
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-2">
            <li><a href="/" className={navLinkStyle} onClick={handleNavClick}>HOME</a></li>
            <li><a href="/about" className={navLinkStyle} onClick={handleNavClick}>ABOUT</a></li>
            <li><a href="/offerings" className={navLinkStyle} onClick={handleNavClick}>OFFERINGS</a></li>
            <li><a href="/projects" className={navLinkStyle} onClick={handleNavClick}>PROJECTS</a></li>

            <li 
              className="relative" 
              ref={resourcesRef}
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                className={`${navLinkStyle} flex items-center gap-2`}
              >
                RESOURCES
                <svg className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isResourcesOpen && (
                <ul className="absolute top-full mt-2 w-48 bg-white text-black rounded-lg shadow-xl z-50 overflow-hidden">
                  <li>
                    <a
                      href="/resources/blogs"
                      className="block px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
                      onClick={handleNavClick}
                    >
                      Blogs
                    </a>
                  </li>
<<<<<<< HEAD
                  <li>
                    <Link to="/resources/casestudies" onClick={handleNavClick} className="block hover:text-yellow-400 pl-3 py-1">Case Studies</Link>
                  </li>




                  <li>
                    <Link
                      to="/resources/gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Gallery
                    </Link>
                  </li>
=======
                   {/* Add other resource links here */}
>>>>>>> 405a8a5da27e8c0cd9c846c2958977392b678bf0
                </ul>
              )}

//             {isResourcesOpen && (
//               <ul className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
//                <li>
//                 <Link
//                   to="/resources/blogs"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleNavClick}
//                 >
//                 Blogs
//               </Link>
//             </li>
//         <li>
//                 <Link
//                   to="/resources/gallery"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={handleNavClick}
//                 >
//                   Gallery
//                 </Link>
//               </li>
                
                <li>
                <Link
                  to="/resources/webinar"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleNavClick}
                >
                  Webinar
                </Link>
              </li>
            
          )}

            </li>

            <li><a href="/career" className={navLinkStyle} onClick={handleNavClick}>CAREER</a></li>
            <li><a href="/contact" className={navLinkStyle} onClick={handleNavClick}>CONTACT</a></li>
          </ul>

          {/* Mobile menu button */}
          <div className="lg:hidden text-green-900 text-3xl cursor-pointer" onClick={toggleMenu}>
            {/* Using SVG for icons for better consistency */}
            {isMenuOpen ? (
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black px-6 pb-4 pt-2 space-y-2 absolute w-full shadow-lg">
            <a href="/" onClick={handleNavClick} className={mobileNavLinkStyle}>HOME</a>
            <a href="/about" onClick={handleNavClick} className={mobileNavLinkStyle}>ABOUT</a>
            <a href="/offerings" onClick={handleNavClick} className={mobileNavLinkStyle}>OFFERINGS</a>
            <a href="/projects" onClick={handleNavClick} className={mobileNavLinkStyle}>PROJECTS</a>
            <div>
              <button
                onClick={toggleResources}
                className={`${mobileNavLinkStyle} w-full flex justify-between items-center`}
              >
                RESOURCES
                <svg className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isResourcesOpen && (
                <div className="ml-4 mt-2 space-y-2 pt-2 border-l-2 border-gray-200">
                  <a
                    href="/resources/blogs"
                    onClick={handleNavClick}
                    className="block hover:bg-gray-100 rounded-lg pl-3 py-2"
                  >
                    Blogs
                  </a>
                </div>
              )}
            </div>
            <a href="/career" onClick={handleNavClick} className={mobileNavLinkStyle}>CAREER</a>
            <a href="/contact" onClick={handleNavClick} className={mobileNavLinkStyle}>CONTACT</a>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;

