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
      
      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/HeroPage_img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay for Tint (to blend with eco-theme) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-black/40 to-black/50 z-5"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen px-6 py-24 md:px-20 lg:px-24 max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 max-w-3xl">
              
              {/* *** UPDATED H1 START *** */}
         {/* *** UPDATED H1 START *** */}
<h1 
  className="font-semibold leading-tight mb-10"
  style={{ fontFamily: 'Inter' }}
>
  <span 
    className="block font-extrabold"
    style={{
      fontSize: '60px',
      background: 'linear-gradient(90deg,#d4f806,#79ffdc,#ffdd00,#3effb9)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    }}
  >
    Sustainability
  </span>

  <span 
    className="block font-semibold mt-2"
    style={{
      fontSize: '50px',
      background: 'linear-gradient(90deg,#ffffff,#c39b17,#ffffff)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    }}
  >
    Through Eco-Centric Approach
  </span>
</h1>

<h2
  className="font-semibold leading-tight mb-10"
  style={{
    fontSize: '30px',
    letterSpacing: '0.5px',
    color: 'white'
  }}
>
  TRANSFORM YOUR BUSINESS WITH SUSTAINABLE INNOVATION
</h2>
{/* *** UPDATED H1 END *** */}

              <Link to="/contact#form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center rounded-xl px-6 py-3 md:px-8 md:py-4 font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
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
          </div>
        </div>
        
      </div>
    </div>
    
  );
}
