'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    {
      id: 1,
      number: '01 / 04',
      title: 'Sustainability is our business',
      description: 'Building a better tomorrow through innovative solutions and responsible practices that benefit our planet and future generations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      cta: 'Learn More'
    },
    {
      id: 2,
      number: '02 / 04',
      title: 'Sustainability Report 2025',
      description: 'Driven by a common purpose to shape a sustainable future, ERM is sustaining our impact and supporting our clients to do the same.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
      cta: 'Read Report'
    },
    {
      id: 3,
      number: '03 / 04',
      title: 'Climate & Net Zero',
      description: 'Leading the charge towards a carbon-neutral future with comprehensive strategies and actionable insights for businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80',
      cta: 'Explore Solutions'
    },
    {
      id: 4,
      number: '04 / 04',
      title: 'Renewable Energy',
      description: 'Harnessing the power of nature to create clean, sustainable energy solutions for a brighter, greener future.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80',
      cta: 'Discover More'
    }
  ];

  const navItems = [
    { number: '01 / 04', title: 'Sustainability is our business' },
    { number: '02 / 04', title: 'Sustainability Report 2025' },
    { number: '03 / 04', title: 'Climate & net zero' },
    { number: '04 / 04', title: 'Renewable Energy' }
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
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              {currentSlide === index && (
                <div className="slide-content-animated absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white max-w-[90%] md:max-w-[600px] z-10 px-4 md:px-0 md:left-[20%] md:translate-x-0">
                  <div className="text-xs md:text-sm font-light mb-4 md:mb-5 tracking-[2px] opacity-80">
                    {slide.number}
                  </div>
                  <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="hero-description text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light opacity-90">
                    {slide.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-cyan-400 text-black rounded-full font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-cyan-300 hover:-translate-y-1 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
                  >
                    {slide.cta}
                    <span className="text-base md:text-lg">→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={previousSlide}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl md:text-2xl rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 z-50 cursor-pointer"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl md:text-2xl rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 z-50 cursor-pointer"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 md:left-[8%] md:translate-x-0 flex flex-wrap gap-3 md:gap-5 z-50 max-w-[90%] md:max-w-[80%] justify-center md:justify-start">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border hover:-translate-y-1 hover:shadow-lg ${
                currentSlide === index
                  ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/40'
                  : 'border border-white/20'
              }`}
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
                  className="progress-bar-animated absolute bottom-0 left-0 h-[3px] bg-cyan-400" 
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}