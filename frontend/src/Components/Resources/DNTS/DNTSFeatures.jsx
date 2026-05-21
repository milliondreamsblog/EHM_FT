import React from "react";
import { motion } from "framer-motion";
import { ChevronsDown, ChevronsRight } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const DNTSFeatures = ({
  features,
  suitedFor,
  activeNode,
  setActiveNode,
  headingStyle,
  centerImage,
}) => {
  return (
    <ScrollRevealElements
      className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-10"
      staggerAmount={0.5}
    >
      {/* Features — image thumbnails like WaterRestoration factors */}
      <motion.div className="flex flex-col items-center lg:w-[450px]">
        <h3 className={headingStyle}>Features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              onMouseEnter={() => setActiveNode(feat.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`relative w-28 h-28 p-1 rounded-full bg-[#0f101071] shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl ${
                  activeNode === feat.id ? "ring-2 ring-[#10b981]" : "ring-1 ring-gray-200"
                }`}
              >
                <img
                  loading="lazy"
                  src={feat.image}
                  alt={feat.name}
                  className="rounded-full w-full h-full object-cover"
                  onError={(e) => {
                    // fallback: hide img and show icon
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* icon fallback, hidden by default */}
                <div
                  className="absolute inset-0 rounded-full items-center justify-center bg-[#0f101071]"
                  style={{ display: "none" }}
                >
                  <feat.IconComponent className="w-8 h-8 text-[#10b981]" />
                </div>
              </div>
              <p className="mt-3 font-semibold text-gray-700 text-sm w-28">
                {feat.name}
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

      {/* DNTS Visual centre */}
      <motion.div className="flex flex-col items-center">
        <h3 className={headingStyle}>DNTS System</h3>
        <div
          onMouseEnter={() => setActiveNode("center")}
          onMouseLeave={() => setActiveNode(null)}
          className={`relative group rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl ${
            activeNode === "center" ? "ring-2 ring-[#10b981]" : "ring-1 ring-gray-200"
          }`}
        >
          <img
            loading="lazy"
            src={centerImage || "/DNTS/dnts-system.webp"}
            alt="DNTS System"
            className="rounded-xl w-64 h-48 md:w-80 md:h-60 object-cover"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/400x300/a0aec0/ffffff?text=DNTS+System")
            }
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <p className="text-white font-bold text-xl text-center px-4">
              Natural Treatment at Source
            </p>
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div className="text-[#10b981] my-4 lg:my-0 flex-shrink-0">
        <ChevronsDown size={60} className="block lg:hidden animate-bounce-vertical" />
        <ChevronsRight size={80} className="hidden lg:block animate-bounce-horizontal" />
      </motion.div>

      {/* Suited For */}
      <motion.div className="flex flex-col items-center lg:w-[350px]">
        <h3 className={headingStyle}>Suited For</h3>
        <div className="flex flex-col gap-6 w-full px-4 lg:px-0">
          {suitedFor.map(({ id, name, IconComponent }) => (
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
                  activeNode === id ? "bg-[#10b98118]" : "bg-gray-100 group-hover:bg-emerald-50"
                }`}
              >
                <IconComponent
                  className={`w-6 h-6 transition-colors duration-300 ${
                    activeNode === id ? "text-[#10b981]" : "text-gray-600"
                  }`}
                />
              </div>
              <p className="font-semibold text-gray-800 text-left leading-tight">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </ScrollRevealElements>
  );
};

export default DNTSFeatures;
