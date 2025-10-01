import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clipboard,
  Image,
  Video,
  FileText,
  Leaf,
  Building2,
  Globe,
  GraduationCap,
  Layers,
} from "lucide-react";

// === RESOURCES MENU DATA ===
const resourcesMenu = [
  {
    title: "Discover",
    items: [
      { name: "Blogs", path: "/resources/blogs", icon: BookOpen },
      { name: "Case Studies", path: "/resources/casestudies", icon: Clipboard },
    ],
  },
  {
    title: "Learn",
    items: [
      { name: "Webinars", path: "/resources/webinar", icon: Video },
      { name: "Gallery", path: "/resources/gallery", icon: Image },
    ],
  },
];

// === OFFERINGS MENU DATA ===
const offeringsMenu = [
  {
    title: "Main",
    items: [{ name: "Offerings ", path: "/offerings", icon: Layers }],
  },
  {
    title: "Sustainability Services",
    items: [
      {
        name: "Sustainability Assessment & Reporting",
        path: "/offerings",
        icon: FileText,
      },
      { name: "Environmental Management", path: "/offerings", icon: Leaf },
    ],
  },
  {
    title: "Urban & Research",
    items: [
      {
        name: "Urban Planning & Management",
        path: "/offerings",
        icon: Building2,
      },
      { name: "Geophysical Investigation", path: "/offerings", icon: Globe },
    ],
  },
  {
    title: "Capacity Building",
    items: [
      { name: "Training & Workshops", path: "/offerings", icon: GraduationCap },
    ],
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md">
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
            <Link to="/" className="text-green-900 hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-green-900 hover:text-yellow-400">
              ABOUT
            </Link>
          </li>

          {/* Offerings Dropdown */}
          <li className="relative group">
            <span
              ref={buttonRef}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "offerings" ? null : "offerings"
                )
              }
              className={`cursor-pointer flex items-center transition-colors duration-200 
                ${activeDropdown === "offerings"
                  ? "text-yellow-400"
                  : "text-green-900 hover:text-yellow-400"
                }`}
            >
              OFFERINGS
              <span
                className={`ml-2 inline-block p-1 border-b-2 border-r-2 transition-all -translate-y-0.5 duration-300 ease-in-out 
                  ${activeDropdown === "offerings"
                    ? "-rotate-180 border-yellow-400"
                    : "rotate-45 border-green-900 group-hover:-rotate-180 group-hover:border-yellow-400"
                  }`}
              ></span>
            </span>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <span
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "resources" ? null : "resources"
                )
              }
              className={`cursor-pointer flex items-center transition-colors duration-200 
                ${activeDropdown === "resources"
                  ? "text-yellow-400"
                  : "text-green-900 hover:text-yellow-400"
                }`}
            >
              RESOURCES
              <span
                className={`ml-2 inline-block p-1 border-b-2 border-r-2 transition-all -translate-y-0.5 duration-300 ease-in-out 
                  ${activeDropdown === "resources"
                    ? "-rotate-180 border-yellow-400"
                    : "rotate-45 border-green-900 group-hover:-rotate-180 group-hover:border-yellow-400"
                  }`}
              ></span>
            </span>
          </li>

          <li>
            <Link
              to="/projects"
              className="text-green-900 hover:text-yellow-400"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-green-900 hover:text-yellow-400"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-green-900 text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{isMenuOpen ? "✕" : "☰"}</span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-fadeIn">
          <Link
            to="/"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            ABOUT
          </Link>

          {/* Mobile Offerings */}
          <details>
            <summary className="cursor-pointer text-green-900 hover:text-yellow-400 font-medium">
              OFFERINGS
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {offeringsMenu.map((section) => (
                <div key={section.title}>
                  <h4 className="text-green-800 font-semibold">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={handleNavClick}
                          className="flex items-center space-x-2 text-green-900 hover:text-yellow-400"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          {/* Mobile Resources */}
          <details>
            <summary className="cursor-pointer text-green-900 hover:text-yellow-400 font-medium">
              RESOURCES
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              {resourcesMenu.map((section) => (
                <div key={section.title}>
                  <h4 className="text-green-800 font-semibold">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={handleNavClick}
                          className="flex items-center space-x-2 text-green-900 hover:text-yellow-400"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          <Link
            to="/projects"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            PROJECTS
          </Link>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block text-green-900 hover:text-yellow-400"
          >
            CONTACT
          </Link>
        </div>
      )}

      {/* Desktop Dropdown Content */}
      {activeDropdown && (
        <div
          ref={dropdownRef}
          className="absolute left-0 w-full bg-[#ffffff] shadow-xl animate-fadeIn hidden lg:block"
        >
          <div className="w-full mx-auto grid lg:grid-cols-4 gap-10">
            {/* LEFT MAIN SECTION */}
            <div className="col-span-3">
              <h3 className="text-lg font-bold text-green-900 mb-4 border-b uppercase pt-10 pb-5 ml-40">
                {activeDropdown}
              </h3>
              <div className="flex flex-cols-4 gap-14 pt-4 ml-40 ">
                {(activeDropdown === "resources"
                  ? resourcesMenu
                  : offeringsMenu
                ).map((section) => (
                  <div key={section.title}>
                    <h4 className="text-green-800 font-semibold mb-5 pb-5">
                      {section.title}
                    </h4>
                    <ul className="space-y-8 pb-20">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={handleNavClick}
                            className="flex items-center space-x-2 text-green-900 hover:text-yellow-400 transition group"
                          >
                            <item.icon className="w-5 h-5 text-green-900 group-hover:text-yellow-400" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE LINKS */}
            <div className="border-l p-9 pt-20 bg-[#edecec]">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/contact"
                    className="text-green-900 hover:text-yellow-500 uppercase font-semibold"
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/more"
                    className="text-green-900 hover:text-yellow-500 uppercase font-semibold"
                  >
                    See More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
