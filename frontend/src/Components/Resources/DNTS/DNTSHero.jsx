import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const DNTSHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a9e8a] to-[#7dcfcf] p-4 md:p-8 overflow-hidden">
      {/* floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 80 + 20;
          return (
            <div
              key={i}
              className="absolute bottom-[-150px] bg-white/30 rounded-full animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `-${Math.random() * 25}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          );
        })}
      </div>

      <ScrollRevealElements
        className="relative z-10 text-center mb-20 md:mb-40"
        staggerAmount={0.5}
      >
        <motion.div className="flex justify-center mb-4">
          <Player
            autoplay
            loop
            src="/lottie-assets/Recycle-Process-Animetion/animations/175a9a37-546c-4c9a-9f82-4c1bf51fb1ac.json"
            className="w-36 h-36 lg:w-48 lg:h-48 lg:translate-y-5"
          />
        </motion.div>
        <motion.h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider">
          <span className="text-[#02ffe6]">Decentralized </span>Natural
          <br />
          <span className="text-[#02ffe6]">Treatment </span>System
        </motion.h1>
        <motion.p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Gravity-based, self-sustainable, root-based technology to treat and
          reuse sewage and wastewater — at the source.
        </motion.p>
      </ScrollRevealElements>

      {/* wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="0.5"
              d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,250.7C672,267,768,245,864,213.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-[calc(50%-0.5rem)] md:left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 md:w-11 md:h-11 border-r-2 border-b-2 md:border-r-4 md:border-b-4 border-emerald-500/80 rotate-45" />
      </div>
    </section>
  );
};

export default DNTSHero;
