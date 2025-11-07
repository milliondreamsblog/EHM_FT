'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    {
      id: 1,
      number: '',
      title: 'Water Positive Systems',
      description: 'Developing strategies and solutions that optimize water use, promote reuse, and restore natural water balance.',
      image: '/HeroPage_img/Waterpositive.png',
      bgPosition: 'center'
    },
    {
      id: 2,
      number: '',
      title: 'Sustainability & ESG',
      description: 'Advising organizations on ESG integration, reporting, and sustainable transformation aligned with global frameworks.',
      image: '/HeroPage_img/SustainabilityESG.png',
      bgPosition: 'center'
    },
    {
      id: 3,
      number: '',
      title: 'Geophysical Exploration',
      description: 'Applying advanced geophysical methods to assess subsurface conditions for environmental and infrastructure planning.',
      image: '/HeroPage_img/Geophysical.png',
      bgPosition: 'center'
    },
    {
      id: 4,
      number: '',
      title: 'Climate Risk',
      description: 'Assessing and mitigating climate-related risks through data analytics, AI, and adaptive resilience planning.',
      image: '/HeroPage_img/CLIMATERISK.png',
      bgPosition: 'center'
    }
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
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes progress {
          from { 
            width: 0%; 
          }
          to { 
            width: 100%; 
          }
        }

        .slide-content-animated {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .progress-bar-animated {
          animation: progress 5s linear forwards;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Slides Container */}
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

              {/* Content */}
              {currentSlide === index && (
                <div 
                  className="slide-content-animated absolute top-1/2 -translate-y-1/2 text-white max-w-[600px] z-10"
                  style={{ left: index <= 1 ? '31%' : '27%' }}
                >
                  <div className="text-xs md:text-sm font-light mb-4 md:mb-5 tracking-[2px] opacity-80">
                    {slide.number}
                  </div>
                  <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed font-light text-white/90 max-w-[500px]">
                    {slide.description}
                  </p>
                </div>
              )}
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


        {/* Static Heading - Commented out as requested
        <div 
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10" 
          style={{ top: '25%' }}
        >
          {/* Blur Background Box *}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 -m-4" />
          
          {/* Gradient Text *}
          <h2 
            className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 py-4 px-8"
            style={{
              textShadow: 'none'
            }}
          >
            Our Focus Area
          </h2>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl md:text-2xl rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 z-30 cursor-pointer"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 md:left-[8%] md:translate-x-0 flex flex-wrap gap-3 md:gap-5 z-20 max-w-[90%] md:max-w-[80%] justify-center md:justify-start">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border hover:-translate-y-1 hover:shadow-lg ${
                currentSlide === index
                  ? 'shadow-lg'
                  : 'border border-white/20'
              }`}
              style={currentSlide === index ? { borderColor: '#14b8a6', borderWidth: '2px', boxShadow: '0 10px 25px rgba(20, 184, 166, 0.4)' } : {}}
            >
              <div className="p-2 md:p-3 flex flex-col gap-1 min-w-[90px] md:min-w-[140px]">
                <div className="text-[10px] md:text-[11px] text-white/60 font-semibold tracking-wide">
                  {item.number}
                </div>
                <div className="text-[11px] md:text-[13px] text-white font-semibold line-clamp-2">
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