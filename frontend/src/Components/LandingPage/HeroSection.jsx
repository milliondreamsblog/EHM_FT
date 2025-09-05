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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

          <div className="flex-1 text-center lg:text-left">
            <div className="mb-14">

            </div>

            <p className="text-4xl md:text-4xl lg:text-6xl text-green-700 font-bold mb-4 uppercase tracking-wide leading-tight py-1">
              <span>
                SUSTAINABILITY
              </span>
              <br />
              <span className="lg:whitespace-nowrap">
                THROUGH ECO-CENTRIC
              </span>
              <br />
              <span>
                APPROACH
              </span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-6 py-1">
              <span className="text-green-600">TRANSFORM</span> YOUR BUSINESS
              <br />
              WITH <span className="text-green-600">SUSTAINABLE</span> INNOVATION
            </h1>




            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 py-1">
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

          </div>


          <div className="flex-1 flex justify-center max-w-sm">
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