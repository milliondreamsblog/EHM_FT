import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="max-w-6xl mx-auto bg-gradient-to-br from-green-50 to-teal-50 min-h-screen flex items-center relative overflow-hidden pt-16">

      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="flex-1 text-center lg:text-left">
            <div className="mb-14">

            </div>

            <p className="text-4xl md:text-4xl lg:text-6xl text-green-700 font-bold mb-4 uppercase tracking-wide">
              SUSTAINABILITY THROUGH ECO-CENTRIC APPROACH
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-6">
              <span className="text-green-600">TRANSFORM</span> YOUR BUSINESS
              <br />
              WITH <span className="text-green-600">SUSTAINABLE</span> INNOVATION
            </h1>

            <p className="font-serif text-gray-600 text-lg mb-8 leading-relaxed">
              EHM is a sustainability and deep tech startup founded by IIT alumni,
              offering services and solutions aligned with the Sustainable
              Development Goals (SDGs). We assist industries, government
              organizations and HEI’s in enhancing their ESG practices, meeting
              regulatory requirements, managing climate risks, and implementing
              sustainability strategies.
            </p>


            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">15+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Book a Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Learn More
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                {
                  name: 'Facebook',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  href: 'https://www.facebook.com/people/EHM-Consultancy-Pvt-Ltd/100063877967113/'
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  href: 'https://x.com/EhmConsultancy'
                },
                {
                  name: 'Instagram',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  href: 'https://www.instagram.com/ehmconsultancy/'
                },
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  href: 'https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-100 hover:bg-green-200 text-green-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          <div className="flex-1 flex justify-center">
            <img
              src="https://morneticherbal.in/images/313.png"
              alt="Sustainability"
              className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;