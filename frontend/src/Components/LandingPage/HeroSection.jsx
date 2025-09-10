import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="max-w-6xl mx-auto min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side: Text and Buttons */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-14">
              {/* You can place a logo or other introductory element here if needed */}
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
              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-green-600 px-8 font-medium text-white backdrop-blur-3xl">
                  Book a Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-8 font-medium text-green-600 backdrop-blur-3xl">
                  Learn More
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center max-w-sm">
            <img
              src="https://morneticherbal.in/images/313.png"
              alt="Sustainability Concept"
              className="w-full max-w-md transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
