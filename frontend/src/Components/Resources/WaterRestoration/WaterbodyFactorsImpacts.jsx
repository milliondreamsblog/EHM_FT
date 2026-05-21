import React from "react";
import { motion } from "framer-motion";
import { ChevronsDown, ChevronsRight } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const WaterbodyFactorsImpacts = ({
  factors,
  impacts,
  activeNode,
  setActiveNode,
  headingStyle,
}) => {
  return (
    <section className="bg-gradient-to-b from-[#dbf1f2] to-[#ededed] py-20 px-4">
      <ScrollRevealElements
        className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-10"
        staggerAmount={0.5}
      >
        {/* Factors  */}
        <motion.div className="flex flex-col items-center lg:w-[450px]">
          <h3 className={headingStyle}>Major Factors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
            {factors.map((factor) => (
              <div
                key={factor.id}
                onMouseEnter={() => setActiveNode(factor.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <div
                  className={`relative w-28 h-28 p-1 rounded-full bg-[#0f101071] shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl ${
                    activeNode === factor.id ? "ring-2 ring-[#10b981]" : "ring-1 ring-gray-200"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={factor.image}
                    alt={factor.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 font-semibold text-gray-700 text-sm w-28">
                  {factor.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div className="text-[#10b981] my-4 lg:my-0 flex-shrink-0">
          <ChevronsDown size={60} className="block lg:hidden animate-bounce-vertical" />
          <ChevronsRight size={80} className="hidden lg:block animate-bounce-horizontal" />
        </motion.div>

        {/* Polluted */}
        <motion.div className="flex flex-col items-center">
          <h3 className={headingStyle}>Polluted Waterbody</h3>
          <div
            onMouseEnter={() => setActiveNode("center")}
            onMouseLeave={() => setActiveNode(null)}
            className={`relative group rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl ${
              activeNode === "center" ? "ring-2 ring-[#10b981]" : "ring-1 ring-gray-200"
            }`}
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dlpluej6w/image/upload/v1759494835/g_polluten_rzolfa.webp"
              alt="Polluted Waterbody"
              className="rounded-xl w-64 h-48 md:w-80 md:h-60 object-cover"
              onError={(e) =>
                (e.target.src = "https://placehold.co/400x300/a0aec0/ffffff?text=Polluted+Water")
              }
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <p className="text-white font-bold text-2xl text-center">Polluted Waterbody</p>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div className="text-[#10b981] my-4 lg:my-0 flex-shrink-0">
          <ChevronsDown size={60} className="block lg:hidden animate-bounce-vertical" />
          <ChevronsRight size={80} className="hidden lg:block animate-bounce-horizontal" />
        </motion.div>

        {/* Impacts  */}
        <motion.div className="flex flex-col items-center lg:w-[350px]">
          <h3 className={headingStyle}>Impacts</h3>
          <div className="flex flex-col gap-6 w-full px-4 lg:px-0">
            {impacts.map(({ id, name, IconComponent }) => (
              <div
                key={id}
                onMouseEnter={() => setActiveNode(id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`flex items-center w-full gap-4 p-4 rounded-xl bg-[#ffffff88] shadow-md transition-all duration-300 ease-in-out cursor-pointer group hover:shadow-xl hover:-translate-y-1 hover:bg-slate-50 ${
                  activeNode === id ? "ring-2 ring-[#10b981] shadow-lg" : "ring-1 ring-gray-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    activeNode === id ? "bg-[#10b98118]" : "bg-gray-100 group-hover:bg-red-50"
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 transition-colors duration-300 ${
                      activeNode === id ? "text-[#10b981]" : "text-gray-600"
                    }`}
                  />
                </div>
                <p className="font-semibold text-gray-800 text-left leading-tight">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </ScrollRevealElements>
    </section>
  );
};

export default WaterbodyFactorsImpacts;
