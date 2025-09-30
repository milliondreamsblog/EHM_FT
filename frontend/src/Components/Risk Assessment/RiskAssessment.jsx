import React from "react";
import { motion } from "framer-motion";
import { Monitor, MousePointer, Grid } from "lucide-react"; // icons

const floatAnimation = {
  animate: {
    y: [0, -10, 0], // float up & down
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const RiskAssessment = () => {
  return (
    <section className="relative bg-[#f5f6f5] text-gray-900 py-16 overflow-hidden">
      {/* Background math notations */}
      <motion.span
        className="absolute top-8 left-4 text-5xl text-gray-400/30 font-serif select-none"
        {...floatAnimation}
      >
        ∫dx
      </motion.span>

      <motion.span
        className="absolute top-1/3 right-10 text-4xl text-gray-400/30 font-serif select-none"
        {...floatAnimation}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        dx²
      </motion.span>

      <motion.span
        className="absolute bottom-1/3 right-12 text-4xl text-gray-400/30 font-serif select-none"
        {...floatAnimation}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        dx³
      </motion.span>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
            The same risk assessment but with <br /> better experience and clean UI
          </h2>
          <img
            src="https://img.freepik.com/premium-photo/fantasy-island-with-floating-waterfalls-octane-ren_1022456-71481.jpg"
            alt="Risk Assessment"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <Monitor className="w-6 h-6 mt-1 text-gray-800" />
            <div>
              <h3 className="font-semibold text-lg">User-Friendly Interface</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our tool features a clean UI design that enhances user friendliness
                and streamlines the user experience unlike an excel sheet.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <MousePointer className="w-6 h-6 mt-1 text-gray-800" />
            <div>
              <h3 className="font-semibold text-lg">
                Better selection with less cognitive load
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                To analyze risk effectively, each input is simplified into an
                intuitive selection process, reducing cognitive load for the user.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4">
            <Grid className="w-6 h-6 mt-1 text-gray-800" />
            <div>
              <h3 className="font-semibold text-lg">Seamless Navigation</h3>
              <p className="text-sm text-gray-600 mt-2">
                This tool simplifies navigation between various inputs required
                for each risk category, ensuring smoother progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;
