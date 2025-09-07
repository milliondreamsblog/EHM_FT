import React from 'react';

// SVG Icons for Vision and Mission
const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v2m0 18v2m9-11h-2M5 12H3m15.364 6.364l-1.414-1.414M5.05 5.05L6.464 6.464m12.422 0l-1.414 1.414M6.464 17.536l1.414-1.414" />
    </svg>
);

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth={1} />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12H2" />
    </svg>
);

// New Sparkle Icon to match your "Our Team" heading style
const SparkleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 17L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 19L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export default function Description() {
  return (
    <section className="bg-teal-50 font-sans leading-normal tracking-tight text-gray-800 antialiased py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* === UPDATED: "WHO WE ARE" HEADING WITH ICONS === */}
        <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4">
                <SparkleIcon />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 to-green-600 text-transparent bg-clip-text">
                    WHO WE ARE
                </h2>
                <SparkleIcon />
            </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">EHM</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                EHM is a sustainability and deep tech startup founded by IIT alumni, 
                offering services and solutions aligned with the Sustainable 
                Development Goals (SDGs). We assist industries, government 
                organizations and HEI’s in enhancing their ESG practices, meeting 
                regulatory requirements, managing climate risks, and implementing 
                sustainability strategies.
              </p>
            </div>
            {/* Right Column: Image */}
            <div>
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="./src/assets/description.jpg"
                  alt="Hands holding a young plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision and Mission Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission Card */}
            <div className="relative group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              <div className="flex-shrink-0">
                <MissionIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide practical & feasible solutions under the SDG framework</p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              <div className="flex-shrink-0">
                <VisionIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">To achieve environmental sustainability through an eco-centric approach</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
