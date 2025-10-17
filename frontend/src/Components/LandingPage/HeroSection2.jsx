import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';

import ScrollRevealElements from '../Animations/ScrollRevealElements';
import { Link } from 'react-router-dom';
import RotatingText from '../Animations/TextAnimation';


 const purposeData = [
    {
      id: 1,
      title: "Book now"
    },
  ]

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
      
      <div className="relative min-h-screen bg-gradient-to-b from-[#7dbea8] via-[#99ffdd] to-[#9be2e7] text-white overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-40">
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
        </div>

        {/* Floating Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
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
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen px-6 py-24 md:px-20 lg:px-24 max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 max-w-3xl">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10"
                style={{fontFamily: 'Inter'}}
              >
                <span className='text-[#26438e]'>Sustainability </span>
                <br />
                Through Eco-Centric
                <br />
                Approach
              </h1>

              <h2 className="text-lg md:text-xl lg:text-[20px] font-semibold leading-tight mb-10">
                TRANSFORM <span className="text-[#c39b17]">YOUR BUSINESS WITH </span>
                <span>SUSTAINABLE INNOVATION</span>
              </h2>

              <Link to="/contact#form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center rounded-xl px-6 py-3 md:px-8 md:py-4 font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  {/* Wavy overlay for organic flow - using pseudo-element via Tailwind arbitrary */}
                    <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] scale-[250%] z-[-1] duration-[400ms]" />
                    <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] scale-[200%] z-[-1] duration-[400ms]" />
                    <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] scale-[180%] z-[-1] duration-[400ms] " />
                    <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] scale-[150%] z-[-1] duration-[400ms]" />    Book a Call
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </Link>
            </div>

           {/* Right Side - Diamond-shaped Cards */} 
           <div className="absolute top-1/2 -translate-y-1/2 right-8 w-[700px] h-[500px] hidden lg:block pointer-events-none"> 
           <div className="relative w-full h-full">
             {/* Card 1 - Top Right with overlay */}
            <div className="absolute top-[90px] right-[-50px] w-[280px] h-[280px] bg-white shadow-2xl transform rotate-[-10deg] transition-all duration-300 hover:rotate-[15deg] hover:scale-105 border-[1px] border-white z-40 pointer-events-auto group"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <img src="/Hero/Hero.jpg"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    alt="Forest" className="w-full h-full object-cover" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                    <span className="text-white font-semibold text-lg text-center px-4">
                      Climate Risk
                    </span>
                  </div>
                </div>
                  {/* Card 2 - Middle with forest image */} 
                  <div className="absolute top-[-40px] right-[130px] w-[280px] h-[280px] bg-white shadow-2xl transform rotate-[-10deg] transition-all duration-300 hover:rotate-[-10deg] hover:scale-105 border-[1px] border-white z-30 pointer-events-auto group"
                   style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} > 
                   <img src="/Hero/Hero2.jpg" 
                   alt="Forest" className="w-full h-full object-cover" /> 

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                      <span className="text-white font-semibold text-lg text-center px-4">
                        Water-Positive Systems
                      </span>
                    </div>
                  </div>
                    {/* Card 3 - Bottom Right with green gradient */} 
                    <div className="absolute top-[270px] right-[80px] w-[280px] h-[280px] bg-white shadow-2xl transform rotate-[-10deg] transition-all duration-300 hover:rotate-[9deg] hover:scale-105 border-[1px] border-white z-20 pointer-events-auto group" 
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} >
                      <img src="/Hero/Hero3.jpg"
                      alt="Forest" className="w-full h-full object-cover" /> 

                      {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                      <span className="text-white font-semibold text-lg text-center px-4">
                        Sustainability & ESG
                      </span>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-[#a8d16f] via-[#8bc34a] to-[#7ab536]">
                      </div> 
                      </div>
                       {/* Card 4 - Far left with green gradient */} 
                       <div className="absolute top-[140px] right-[260px] w-[280px] h-[280px] bg-white shadow-2xl transform rotate-[-10deg] transition-all duration-300 hover:rotate-[9deg] hover:scale-105 border-[1px] border-white z-10 pointer-events-auto group" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} >
                        <img src="/Hero/Hero4.jpg"
                          alt="Forest" className="w-full h-full object-cover" />  
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                          <span className="text-white font-semibold text-lg text-center px-4">
                            Geophysical Exploration
                          </span>
                        </div>
                       <div className="w-full h-full bg-gradient-to-br from-[#a8d16f] via-[#8bc34a] to-[#7ab536]">

                       </div>
                  </div>
                </div>
              </div>
            </div>
          

          {/* Trusted By Section */}
          <div className="mt-auto pt-12">
            <p className="text-sm uppercase tracking-wider font-medium mb-8 opacity-90 text-[#26438e]">Trusted by {"   "} {"   "} 
              <span className="text-3xl text-[#c39b17] font-medium tracking-wide opacity-85 hover:opacity-100 transition-opacity">
              <RotatingText />
              </span>
            </p>
            

            {/* <div className="flex flex-wrap items-center gap-8 md:gap-16">
              <div className="text-2xl font-medium tracking-wide opacity-85 hover:opacity-100 transition-opacity">
                IIT Kanpur<sup className="text-sm">©</sup>
              </div>
              <div className="text-2xl font-medium tracking-wide opacity-85 hover:opacity-100 transition-opacity">
                CSJMIF
              </div>
            </div> */}
          </div>
        </div>

        {/* Mobile Fireside Chat Card */}
        <div className="lg:hidden mx-6 mb-6 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
          <p className="text-xs font-semibold text-emerald-400 mb-2">
            Register for upcoming <span className="text-emerald-400">Webinar</span>
          </p>
          <h3 className="text-xl font-semibold leading-snug mb-5">
            The Intersection of Climate Action and Global Innovation
          </h3>
          <a
            href="https://ehmconsultancy.co.in/resources/webinar"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm py-2 transition-colors duration-300 hover:text-emerald-400"
          >
            Register
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    
  );
}