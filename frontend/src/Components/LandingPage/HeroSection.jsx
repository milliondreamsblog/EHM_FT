import React, { useRef, useEffect, useState } from "react";
import HeroVideo from "../../assets/hero/hero_bg.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Homepage() {
  const targetRef = useRef(null);
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();

      if (rect.bottom < 0) {
        setShowCard(false);
      } else {
        setShowCard(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <style>{`
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes bounceVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-horizontal { animation: bounceHorizontal 2s infinite; }
        .animate-bounce-vertical { animation: bounceVertical 2s infinite; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-50vh) translateX(20px);
          }
          100% {
            transform: translateY(-120vh) translateX(-20px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay for Tint (to blend with eco-theme) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-5"></div>

        {/* Background SVG Pattern */}
        {/* <div className="absolute inset-0 opacity-20 z-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7dbea8', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#98d8dc', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#98d8dc', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width="1200" height="800" fill="url(#g1)" />
            <path d="M0,400 Q300,300 600,350 T1200,400 L1200,800 L0,800 Z" fill="#98d8dc" opacity="0.6" />
            <path d="M0,500 Q300,450 600,480 T1200,500 L1200,800 L0,800 Z" fill="#98d8dc" opacity="0.5" />
            <path d="M0,600 Q300,550 600,580 T1200,600 L1200,800 L0,800 Z" fill="#98d8dc" opacity="0.4" />
          </svg>
        </div> */}

        {/* Floating Bubbles */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-5">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 80 + 20;
            const style = {
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `-${Math.random() * 25}s`,
              opacity: Math.random() * 0.4 + 0.1,
            };
            return (
              <div
                key={i}
                className="absolute bottom-[-150px] bg-white/30 rounded-full animate-float"
                style={style}
              ></div>
            );
          })}
        </div> */}

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen px-6 pt-24 pb-12 md:px-20 lg:pl-10 lg:pr-24 max-w-[1600px] mx-auto justify-center lg:justify-end">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 max-w-3xl mb-12 lg:mb-32 text-center lg:text-left transition-all duration-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                  EHM<br className="hidden md:block" />
                  {/* <span className="text-emerald-400">Management</span> */}
                </h1>
                <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                  Deep-tech environmental solutions for climate risk intelligence,<br />
                  sustainable water management, and institutional ESG reporting.
                </p>

                <Link to="/contact#form">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center mx-auto lg:mx-0 drop-shadow-2xl rounded-xl px-10 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group bg-emerald-600"
                  >
                    Book a Call
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
