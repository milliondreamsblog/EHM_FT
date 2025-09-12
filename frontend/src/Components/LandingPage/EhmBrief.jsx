

import React from "react";

const EhmBrief = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Video Section */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          {/* <video
            src="/assets/ehmbrief.mp4" // <-- replace with your video path
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          /> */}
          <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png" alt="" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center justify-between">
          {/* text */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-emerald-700">EHM</span> is a{" "}
              <span className="font-medium text-emerald-600">
                sustainability and deep tech startup
              </span>{" "}
              founded by IIT alumni, offering services and solutions aligned with
              the{" "}
              <span className="font-medium text-emerald-600">
                Sustainable Development Goals (SDGs)
              </span>
              . We assist industries, government organizations, and HEI’s in
              enhancing their{" "}
              <span className="font-medium text-emerald-600">ESG practices</span>,
              meeting regulatory requirements, managing{" "}
              <span className="font-medium text-emerald-600">climate risks</span>,
              and implementing{" "}
              <span className="font-medium text-emerald-600">
                sustainability strategies
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through a commitment to{" "}
              <span className="font-medium text-emerald-600">excellence</span> and{" "}
              <span className="font-medium text-emerald-600">collaboration</span>,
              EHM continues to support organizations in achieving their goals
              while creating{" "}
              <span className="font-medium text-emerald-600">
                long-term value and impact
              </span>
              .
            </p>
          </div>

          {/* sucess rate */}
          {/* <div className="mt-6">
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
                <div className="text-2xl font-bold text-green-700">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;
