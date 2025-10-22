import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

import image from '../../../favicon.png'
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full bg-[#055d1f] py-6 px-4 sm:px-8 lg:px-16">
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src= {image}
                alt="EHM Logo"
                className="h-10 w-12 sm:h-12 sm:w-16 rounded-lg shadow-lg bg-white p-1"
              />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  EHM CONSULTANCY
                </h3>
                <p className="text-white text-xs sm:text-sm opacity-80">
                  Sustainable Solutions for Tomorrow
                </p>
              </div>
            </div>

            <p className="text-white text-sm sm:text-base leading-relaxed opacity-90 max-w-md">
            </p>

            <div className="flex items-start space-x-3 text-white opacity-90">
              <FaMapMarkerAlt className="text-green-300 mt-1 flex-shrink-0" />
              <div className="text-sm sm:text-base">
                <div>TECHNOPARK, IIT KANPUR</div>
                <div>Kalyanpur, Kanpur - 208016</div>
                <div>India</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold flex items-center space-x-2 text-white">
              <FaEnvelope className="text-green-300" />
              <span>Stay Updated</span>
            </h4>
            <p className="text-white text-sm sm:text-base opacity-90">
              Get the latest news and updates on sustainability initiatives.
            </p>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-green-300 rounded-lg focus:outline-none transition-all duration-200 text-gray-800"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-white opacity-80">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">Connect With Us</h4>
            <div className="flex space-x-4 flex-wrap sm:flex-nowrap">
              <a
                href="https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
              <a
                href="https://x.com/EhmConsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaTwitter className="text-xl text-white" />
              </a>
                            <a
                href="https://www.instagram.com/ehmofficial1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
                            <a
                href="https://www.facebook.com/profile.php?id=100063877967113"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaFacebook className="text-xl text-white" />
              </a>
                            <a
                href="https://www.youtube.com/@EHMOfficial1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaYoutube className="text-xl text-white" />
              </a>
            </div>
            <div className="pt-4 space-y-2 text-white opacity-90 text-sm sm:text-base">
              <div><strong>Email:</strong> info@ehmconsultancy.co.in</div>
              <div><strong>Phone:</strong> +91 9892396408</div>
            </div>
          </div>
        </div>

        <div className="">
          <nav className="flex flex-wrap gap-6 text-white text-sm sm:text-base font-medium">
            <a href="/" className="hover:text-green-100 transition-all">Home</a>
            <a href="/about" className="hover:text-green-100 transition-all">About</a>
            <a href="/offerings" className="hover:text-green-100 transition-all">Offerings</a>
            <a href="/projects" className="hover:text-green-100 transition-all">Projects</a>
            <a href="/resources" className="hover:text-green-100 transition-all">Resources</a>
            <a href="/contact" className="hover:text-green-100 transition-all">Contact</a>
          </nav>
        </div>

        <div className="border-t border-green-700 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center text-white opacity-90 text-xs sm:text-sm gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} EHM Consultancy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="#" className="hover:text-green-100">Privacy Policy</a>
            <a href="#" className="hover:text-green-100">Terms of Service</a>
            <a href="/contact" className="hover:text-green-100">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;