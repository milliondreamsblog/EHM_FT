import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveLoader = () => {
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Initializing Eco-Systems...",
    "Analyzing Climate Data...",
    "Restoring Water Balance...",
    "Optimizing Sustainability...",
    "Growing Green Future...",
    "Loading blogs..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 z-50 overflow-hidden">
      {/* Background ambient animations */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl"
            style={{
              background: i % 2 === 0 ? "#10b981" : "#06b6d4", // emerald-500 / cyan-500
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 border-4 border-dashed border-emerald-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner rotating ring (reverse) */}
          <motion.div
            className="absolute inset-2 border-4 border-dotted border-teal-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Logo / Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white p-4 rounded-full shadow-lg"
          >
            <img loading="lazy" src="/ehm_logo.webp"
              alt="EHM Logo"
              className="h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Orbiting particle */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-4 h-4 bg-lime-500 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 blur-sm shadow-[0_0_10px_#84cc16]" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-xl font-medium text-teal-800 tracking-wide"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveLoader;
