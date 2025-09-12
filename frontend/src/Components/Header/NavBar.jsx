import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
        setIsGalleryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsResourcesOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  const toggleGallery = () => {
    setIsGalleryOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsGalleryOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/15 backdrop-blur-md shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <img
              src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
              alt="EHM Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6 font-medium">
            <li>
              <Link
                to="/"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/offerings"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                OFFERINGS
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                PROJECTS
              </Link>
            </li>

            <li className="relative" ref={resourcesRef}>
              <span
                onClick={toggleResources}
                className="cursor-pointer text-green-900 hover:text-yellow-400 flex items-center"
              >
                RESOURCES ▾
              </span>
              {isResourcesOpen && (
                <ul className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  <li>
                    <Link
                      to="/resources/blogs"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Blogs
                    </Link>
                  </li>
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
            </ul>
          )}

            </li>

            <li>
              <Link
                to="/career"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                CAREER
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-green-900 hover:text-yellow-400"
                onClick={handleNavClick}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div
            className="lg:hidden text-green-900 text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            <i
              className={isMenuOpen ? "ri-close-large-line" : "ri-menu-4-line"}
            ></i>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black px-6 py-4 space-y-3 absolute w-full shadow-lg">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              ABOUT
            </Link>
            <Link
              to="/offerings"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              OFFERINGS
            </Link>
            <Link
              to="/projects"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              PROJECTS
            </Link>
            <div>
              <span
                onClick={toggleResources}
                className="flex justify-between items-center cursor-pointer hover:text-yellow-400 py-2"
              >
                RESOURCES <span>▾</span>
              </span>
              {isResourcesOpen && (
                <div className="ml-4 mt-1 space-y-1 pt-2 border-l-2 border-green-100">
                  <Link
                    to="/resources/blogs"
                    onClick={handleNavClick}
                    className="block hover:text-yellow-400 pl-3 py-1"
                  >
                    Blogs
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/career"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              CAREER
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block hover:text-yellow-400 py-2"
            >
              CONTACT
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
