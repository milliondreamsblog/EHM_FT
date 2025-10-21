import { certified } from "../../Data/Data";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import { useState } from "react";

const CertifiedLogo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 mb-3"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Certified & Trusted
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Industry-recognized certifications and partnerships
          </p>
        </motion.div>

        <ScrollRevealElements
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          staggerAmount={0.15}
        >
          {certified.map((cert, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"
                animate={{
                  backgroundPosition: hoveredIndex === index ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                }}
                transition={{
                  duration: 3,
                  repeat: hoveredIndex === index ? Infinity : 0,
                }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Card with Glassmorphism */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 cursor-pointer overflow-hidden shadow-lg border border-gray-200/50"
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                  animate={{
                    translateX: hoveredIndex === index ? ["0%", "200%"] : "-100%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Certificate Logo */}
                <div className="relative z-10 flex items-center justify-center min-h-[100px]">
                  <motion.img
                    src={`/Certified/${cert}.png`}
                    alt={cert}
                    className="h-20 md:h-20 w-auto object-contain filter drop-shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </div>

                {/* Floating Particles on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                        animate={{
                          x: Math.cos((i * Math.PI * 2) / 8) * 60,
                          y: Math.sin((i * Math.PI * 2) / 8) * 60,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </ScrollRevealElements>

        {/* Bottom Accent Line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedLogo;