import React from "react";

const EhmBrief = () => {
  return (
    <section className="relative font-sans overflow-hidden">
      {/* Top Section */}
      <div className="relative text-center w-full h-auto mx-auto py-16 sm:py-20 md:py-24">
        {/* Background Circles (hidden on < md) */}
        <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none translate-y-10 p-8 sm:p-16 md:p-20">
          {/* Outer Circle */}
          <div className="w-[95vw] max-w-[1200px] aspect-square rounded-full border-2 border-black/20 bg-[#ededed] relative flex items-center justify-center p-6 sm:p-10">
            {/* Inner Circle */}
            <div className="w-[85%] aspect-square rounded-full border-2 border-black/20 bg-[#eff5f2e8] relative"></div>
          </div>
        </div>

        {/* Top & bottom gradients */}
        <div className="absolute -top-10 left-0 w-full h-[70%] bg-gradient-to-b from-[#ededed]" />
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#ededed]" />

        {/* Top Section Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <span className="inline-block px-4 py-1.5 mb-4 sm:mb-5 text-lg sm:text-2xl bg-emerald-100 text-emerald-800 rounded-3xl">
            About <span className="font-bold">EHM</span>
          </span>

          {/* Adjust spacing when integral symbol hidden */}
          <div className="translate-y-8 lg:translate-y-12">
            {/* Main Text */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-center">
              Honored as the{" "}
              <span className="font-bold text-emerald-600">
                Best Sustainability Startup
              </span>
              , EHM is a deep-tech venture founded by
              <span className="inline-block bg-white text-gray-900 font-bold rounded-md px-3 py-1 mx-1">
                IIT alumni
              </span>
              that transforms complex environmental challenges into
              opportunities for growth. We specialize in data-driven{" "}
              <span className="font-bold text-emerald-600">
                Climate Risk Intelligence{" "}
              </span>
              and engineering sustainable solutions that deliver lasting value
              and impact.
            </p>
          </div>

          {/* Decorative Integral Symbol */}
          <div className="hidden lg:flex col-span-2 justify-center items-start pt-8 -translate-x-1/2 translate-y-14">
            <span className="text-7xl xl:text-9xl font-light text-gray-300">
              ∫<em className="text-7xl xl:text-9xl not-italic">dx</em>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full relative z-10 bg-[#ededed]">
        <div className="col-span-12 lg:col-span-10 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center md:text-left">
            Discover Our Eco-Centric Approach
          </h2>

          <div className="
            grid grid-cols-1 md:grid-cols-2 
            gap-6 sm:gap-10 
            md:gap-12 lg:gap-16 xl:gap-20
            items-center
          ">
            {/* Left Column: Image */}
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
                alt="Aerial view of green terrace farms"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col mt-6 md:mt-0 md:pl-6 lg:pl-12">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Climate Risk Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-base lg:text-lg">
                EHM is a sustainability and deep tech startup founded by IIT
                alumni, offering services and solutions aligned with the
                Sustainable Development Goals (SDGs). We assist industries,
                government organizations, and HEI’s in enhancing their ESG
                practices, meeting regulatory requirements, managing climate
                risks, and implementing sustainability strategies.
                <br />
                <br />
                Through a commitment to excellence and collaboration, EHM
                continues to support organizations in achieving their goals
                while creating long-term value and impact.
              </p>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 self-start bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300"
              >
                Know more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;
