import React from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const EhmBrief = () => {
  return (
    <section className="relative font-sans overflow-hidden">
      {/* Multiple layered gradients for deep fading effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      
      {/* Diagonal gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-150/30 to-teal-50/50" />
      
      {/* Strong top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      
      {/* Strong bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      {/* Top Section */}
      <div className="relative text-center w-full h-auto mx-auto py-16 sm:py-16 md:py-16 z-20">
        {/* Background Circles  */}
        {/* <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none translate-y-10 p-8 sm:p-16 md:p-20">
          <div className="w-[95vw] max-w-[1200px] aspect-square rounded-full border-2 border-black/20 bg-[#ededed] relative flex items-center justify-center p-6 sm:p-10">
            <div className="w-[85%] aspect-square rounded-full border-2 border-black/20 bg-[#eff5f2e8] relative"></div>
          </div>
        </div>
        <div className="absolute -top-10 left-0 w-full h-[70%] bg-gradient-to-b from-[#ededed]" />
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-[#ededed]" /> */}

        {/* Top Section Content */}
        <SectionHeading>See The Impact in Real Time</SectionHeading>
        {/* <ScrollRevealElements
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"
          staggerAmount={0.5}
          yOffset={40}
        > */}

          {/* <motion.span className="inline-block px-4 py-1.5 mb-4 sm:mb-5 text-lg sm:text-2xl bg-emerald-100 text-emerald-800 rounded-3xl">
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
          </motion.div> */}

          {/* <motion.div className="hidden lg:flex col-span-2 justify-center items-start pt-8 -translate-x-1/2 translate-y-14">
            <span className="text-7xl xl:text-9xl font-light text-gray-300">
              ∫<em className="text-7xl xl:text-9xl not-italic">dx</em>
            </span>
          </motion.div>
        </ScrollRevealElements> */}
      </div>

      {/* Bottom Section */}
      <div className="w-full relative z-20">
        <div className="col-span-12 lg:col-span-10 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-32">

          {/* Main descriptive area - heading intentionally omitted here to keep page flow concise */}

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
                src='/offering/SR.png'
                alt="Aerial view of green terrace farms"
              />
            </motion.div>

            <ScrollRevealElements
              className="flex flex-col mt-6 md:mt-0 md:pl-6 lg:pl-12"
              staggerAmount={0.5}
              yOffset={30}
            >
              <motion.h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                
              </motion.h3>
              <motion.p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-base lg:text-lg">
                EHM specializes in comprehensive geophysical investigations for subsurface exploration, utilizing well-established methodologies and advanced instrumentation. Our tailored approach integrates multiple geophysical techniques and industry-standard tools, ensuring that each project benefits from methods best suited to its specific requirements and site conditions. This commitment enables us to consistently deliver accurate, data-driven insights that support informed decision-making across a wide range of applications.

                <br />
                <br />
              </motion.p>
            </ScrollRevealElements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;