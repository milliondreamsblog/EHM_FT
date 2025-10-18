import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Safe window width hook that works with SSR and updates on resize.
 */
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = null;
    const onResize = () => {
      // preference: use requestAnimationFrame for smoother updates
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setWindowWidth(window.innerWidth));
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowWidth;
};

/**
 * Small wrapper to reveal children when in view with stagger control.
 */
const ScrollReveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.div>
);

const OfferingsHero = () => {
  const width = useWindowWidth();
  const showOuterCircle = width >= 400;
  const showInnerCircle = width >= 750;
  const [isMounted, setIsMounted] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    // protect against double mounting in StrictMode
    if (!mountedRef.current) {
      setIsMounted(true);
      mountedRef.current = true;
    }
  }, []);

  if (!isMounted) {
    // lightweight loading state
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // motion variants for floating cards
  const cardVariant = (i = 0) => ({
    initial: { opacity: 0, y: 10 * (i + 1), x: -6 * (i + 1), scale: 0.995 },
    animate: { opacity: 1, y: 0, x: 0, scale: 1 },
    transition: { delay: 0.2 + i * 0.08, duration: 0.45, ease: "easeOut" },
  });

  return (
    <div className="w-full font-sans overflow-x-hidden min-h-screen flex flex-col bg-white">
      {/* HERO */}
      <section className="relative flex-1 flex items-center justify-center py-12 sm:py-20 bg-gradient-to-r from-[#c2e7d8]">
        {/* decorative large circular gradients (responsive, subtle) */}
        <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
          {showOuterCircle && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                aria-hidden
                className="rounded-full"
                style={{
                  width: showInnerCircle ? "95vw" : "120vw",
                  height: showInnerCircle ? "95vw" : "120vw",
                  maxWidth: "1200px",
                  maxHeight: "1200px",
                  border: "2px solid rgba(0,106,64,0.35)",
                  background:
                    "radial-gradient(circle at center, rgba(194,231,216,0.9), rgba(194,231,216,0.6))",
                }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <ScrollReveal className="mb-4" delay={0}>
            <p className="text-sm text-emerald-800">
              *Updated accordingly to v4.2 from Verra AFOLU Non-Permanence Risk tool
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Easy and intuitive risk analysis for your projects
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-emerald-500 text-white font-semibold px-6 md:px-10 py-2.5 rounded-lg shadow-md hover:bg-emerald-600 transition transform hover:-translate-y-0.5"
              >
                Request a Demo of Risk Analysis Tool
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating "cards" area */}
      <section className="relative py-12 md:py-20 bg-white w-full">
        {/* decorative SVG waves (kept simple & responsive) */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect width="1440" height="800" fill="#c2e7d8" />
            <path
              d="M0 250 C 360 420, 1080 40, 1440 220 L1440 800 L0 800 Z"
              fill="#E3F2EF"
            />
            <path
              d="M0 350 C 450 520, 980 160, 1440 420 L1440 800 L0 800 Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Floating area uses a central bounded box to avoid insane overflow */}
          <div className="relative mx-auto mt-8 max-w-[980px] h-[560px] sm:h-[620px] md:h-[680px] lg:h-[720px]">
            {/* Use a grid to position cards responsively rather than absolute extremes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[920px] h-full">
                {/* Top-left card */}
                <motion.div
                  className="absolute left-2 top-6 z-30 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-lg"
                  initial={cardVariant(0).initial}
                  animate={cardVariant(0).animate}
                  transition={cardVariant(0).transition}
                >
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 mb-3">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                    Project Management
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg shadow-sm">
                      Query 1
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">
                      Query 2
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">
                      Mitigation
                    </li>
                  </ul>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 mt-4 mb-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                    Financial Viability
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="py-2 px-3 leading-tight hover:bg-gray-50 rounded-lg transition">
                      Projects Payback Period & Percent of funding
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">
                      Mitigation
                    </li>
                  </ul>
                </motion.div>

                {/* Top-right image card */}
                <motion.div
                  className="absolute right-4 top-8 z-40 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                  initial={cardVariant(1).initial}
                  animate={cardVariant(1).animate}
                  transition={cardVariant(1).transition}
                >
                  <img
                    src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756386634/EHM-APP/jegdhviut447yjgbcers.png"
                    alt="External Risk"
                    className="w-full h-36 object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://via.placeholder.com/288x160?text=Image+Not+Found";
                    }}
                  />
                  <div className="flex justify-between items-center p-4">
                    <h3 className="font-bold text-gray-800 text-base">External Risk</h3>
                    <span className="text-base font-semibold text-gray-500 flex items-center">
                      64% <span className="text-gray-400 ml-1 text-lg">&gt;</span>
                    </span>
                  </div>
                </motion.div>

                {/* Bottom-left image card */}
                <motion.div
                  className="absolute left-6 bottom-10 z-20 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                  initial={cardVariant(2).initial}
                  animate={cardVariant(2).animate}
                  transition={cardVariant(2).transition}
                >
                  <img
                    src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png"
                    alt="Natural Risk"
                    className="w-full h-36 object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://via.placeholder.com/288x160?text=Image+Not+Found";
                    }}
                  />
                  <div className="flex justify-between items-center p-4">
                    <h3 className="font-bold text-gray-800 text-base">Natural Risk</h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Score 17
                    </span>
                  </div>
                </motion.div>

                {/* Center card (primary interaction) */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[18.5rem] sm:w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl"
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="font-semibold text-gray-400 text-xs mb-1">Project Management</p>
                  <h3 className="font-semibold text-sm text-gray-800 mb-4 leading-snug">
                    Does the project have an adaptive management plan in place that
                    includes a monitoring plan?*
                  </h3>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-emerald-500 text-white text-sm py-2 rounded-lg hover:bg-emerald-600 transition">
                      Yes
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-200 transition">
                      No
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower summary section */}
      <section className="bg-gradient-to-b from-[#f8fafc] to-[#ffffff] py-10 md:py-16 relative">
        <span className="absolute bottom-4 left-4 md:left-20 text-gray-100 text-7xl md:text-8xl font-serif select-none">
          ∫dx
        </span>
        <span className="absolute bottom-4 right-4 md:right-20 text-gray-100 text-4xl md:text-5xl font-serif select-none">
          dx
        </span>

        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-8" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
              Doing away with tedious Verra AFOLU documentation and updates, this tool
              will help you undertake the non-permanence risk analysis with{" "}
              <span className="text-emerald-600">easy navigation and clean UI</span>
            </h2>
          </ScrollReveal>

          <motion.div
            className="max-w-4xl mx-auto bg-white border-2 border-[#3f8c5b] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/3 h-44 md:h-36">
              <img
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388925/EHM-APP/rnifglwnnstvedixsrrb.png"
                alt="Forest"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://via.placeholder.com/320x200?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold text-gray-500 mb-2">August 28, 2025</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Water Stewardship in India: A Call for Collective Action
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                In India, the spectre of water scarcity looms large...
              </p>
              <a
                href="/resources/blogs"
                className="font-semibold text-emerald-600 inline-flex items-center gap-1 group"
              >
                Read more
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfferingsHero;
