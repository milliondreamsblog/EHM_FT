import React from "react";

const EhmBrief = () => {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* This container is now hidden on mobile and visible on desktop (lg) */}
      <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-center">
        {/* Circle 1 */}
        <div className="w-[97%] h-[800px] flex items-center justify-center rounded-full border-2 border-black/10 bg-[#dbdddc] relative overflow-hidden">
          {/* Top gradient blur */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#ededed] blur-5xl" />
          {/* Bottom gradient blur */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#ededed] blur-5xl" />
          {/* Circle 2 */}
          <div className="w-[88%] h-[700px] rounded-full border-2 border-black/10 bg-[#c9c9c9] relative overflow-hidden "></div>
        </div>
      </div>

      {/* Top gradient blur */}
      <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-[#ededed] blur-5xl" />
      {/* Bottom gradient blur */}
      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#ededed] blur-5xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-between">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-emerald-700">EHM</span> is a{" "}
              <span className="font-medium text-emerald-600">
                sustainability and deep tech startup
              </span>{" "}
              founded by IIT alumni, offering services and solutions aligned
              with the{" "}
              <span className="font-medium text-emerald-600">
                Sustainable Development Goals (SDGs)
              </span>
              . We assist industries, government organizations, and HEI’s in
              enhancing their{" "}
              <span className="font-medium text-emerald-600">
                ESG practices
              </span>
              , meeting regulatory requirements, managing{" "}
              <span className="font-medium text-emerald-600">
                climate risks
              </span>
              , and implementing{" "}
              <span className="font-medium text-emerald-600">
                sustainability strategies
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through a commitment to{" "}
              <span className="font-medium text-emerald-600">excellence</span>{" "}
              and{" "}
              <span className="font-medium text-emerald-600">
                collaboration
              </span>
              , EHM continues to support organizations in achieving their goals
              while creating{" "}
              <span className="font-medium text-emerald-600">
                long-term value and impact
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;