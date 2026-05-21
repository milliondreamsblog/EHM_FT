'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    { id: 1, image: '/HeroPage_img/Waterpositive.webp', bgPosition: 'center' },
    { id: 2, image: '/HeroPage_img/SustainabilityESG.webp', bgPosition: 'center' },
    { id: 3, image: '/HeroPage_img/Geophysical.webp', bgPosition: 'center' },
    { id: 4, image: '/HeroPage_img/CLIMATERISK.webp', bgPosition: 'center' }
  ];

  const navItems = [
    { number: '', title: 'Water Positive Systems' },
    { number: '', title: 'Sustainability & ESG' },
    { number: '', title: 'Geophysical Exploration' },
    { number: '', title: 'Climate Risk' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-bar-animated {
          animation: progress 5s linear forwards;
        }
      `}</style>

      <div className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-black">
        {/* Text Content - Added from HeroSection2 */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h1
              className="font-semibold leading-tight mb-6 md:mb-10"
              style={{ fontFamily: 'Inter' }}
            >
              <span
                className="block font-extrabold"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 3.5rem)',
                  background: 'linear-gradient(90deg,#d4f806,#79ffdc,#ffdd00,#3effb9)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '1.2'
                }}
              >
                Sustainability &
              </span>

              <span
                className="block font-semibold mt-2 md:mt-4"
                style={{
                  fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
                  background: 'linear-gradient(90deg,#ffffff,#c39b17,#ffffff)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '1.2'
                }}
              >
                Deep Tech Innovation
              </span>
            </h1>

            <h2
              className="font-medium leading-relaxed mb-8 md:mb-10 text-white/90"
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                letterSpacing: '0.5px',
                maxWidth: '700px'
              }}
            >
              Assisting industries, government organizations, and HEIs in enhancing ESG practices and managing climate risks.
            </h2>


          </div>
        </div>

        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.bgPosition
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={previousSlide}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl md:text-2xl rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 z-30 cursor-pointer"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl md:text-2xl rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 z-30 cursor-pointer"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 md:bottom-12 left-0 sm:left-[8%] px-6 sm:px-0 flex flex-wrap justify-center sm:justify-start gap-3 md:gap-6 z-20 w-full sm:max-w-[85%]">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border hover:-translate-y-1 hover:shadow-lg ${currentSlide === index
                ? 'shadow-lg'
                : 'border border-white/20'
                }`}
              style={currentSlide === index ? {
                borderColor: '#14b8a6',
                borderWidth: '2px',
                boxShadow: '0 10px 25px rgba(20, 184, 166, 0.4)'
              } : {}}
            >
              <div className="p-2.5 md:p-3.5 flex flex-col gap-1.5 min-w-[99px] md:min-w-[154px]">
                <div className="text-[12.9px] md:text-[14.2px] text-white font-semibold line-clamp-2" style={{ fontFamily: '"Jost", sans-serif', fontWeight: 600 }}>
                  {item.title}
                </div>
              </div>
              {currentSlide === index && (
                <div
                  key={`progress-${currentSlide}`}
                  className="progress-bar-animated absolute bottom-0 left-0 h-[3px]"
                  style={{ backgroundColor: '#14b8a6' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
