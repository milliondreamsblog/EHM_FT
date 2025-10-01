import React from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';

const EhmBrief = () => {
  return (
    <section className="relative font-sans overflow-hidden">
      {/* Top Section */}
      <div className="relative text-center w-full h-auto mx-auto py-16 sm:py-20 md:py-24">
        {/* Background Circles  */}
        <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none translate-y-10 p-8 sm:p-16 md:p-20">
          <div className="w-[95vw] max-w-[1200px] aspect-square rounded-full border-2 border-black/20 bg-[#ededed] relative flex items-center justify-center p-6 sm:p-10">
            <div className="w-[85%] aspect-square rounded-full border-2 border-black/20 bg-[#eff5f2e8] relative"></div>
          </div>
        </div>
        <div className="absolute -top-10 left-0 w-full h-[70%] bg-gradient-to-b from-[#ededed]" />
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#ededed]" />

        {/* Top Section Content */}
        <ScrollRevealElements
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
          staggerAmount={0.5}
          yOffset={40}
        >

          <motion.span className="inline-block px-4 py-1.5 mb-4 sm:mb-5 text-lg sm:text-2xl bg-emerald-100 text-emerald-800 rounded-3xl">
            About <span className="font-bold">EHM</span>
          </motion.span>

          <motion.div className="translate-y-8 lg:translate-y-12">
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
          </motion.div>

          <motion.div className="hidden lg:flex col-span-2 justify-center items-start pt-8 -translate-x-1/2 translate-y-14">
            <span className="text-7xl xl:text-9xl font-light text-gray-300">
              ∫<em className="text-7xl xl:text-9xl not-italic">dx</em>
            </span>
          </motion.div>
        </ScrollRevealElements>
      </div>

      {/* Bottom Section */}
      <div className="w-full relative z-10 bg-[#ededed]">
        <div className="col-span-12 lg:col-span-10 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-32">

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discover Our Eco-Centric Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
                alt="Aerial view of green terrace farms"
              />
            </motion.div>

            <ScrollRevealElements
              className="flex flex-col mt-6 md:mt-0 md:pl-6 lg:pl-12"
              staggerAmount={0.5}
              yOffset={30}
            >
              <motion.h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Climate Risk Intelligence
              </motion.h3>
              <motion.p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-base lg:text-lg">
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
              </motion.p>
              <motion.a
                href="#"
                className="group inline-flex items-center justify-center gap-2 self-start bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300"
              >
                Know more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </ScrollRevealElements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;