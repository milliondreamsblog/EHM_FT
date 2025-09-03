import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import testimonial from '../../Data/Testimonial.js';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const intervalRef = useRef(null);
  const autoScrollInterval = 3400;

  const showNextCard = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
  }, []);

  const showPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonial.length) % testimonial.length);
  };

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(showNextCard, autoScrollInterval);
  }, [showNextCard]);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  const totalCards = testimonial.length;
  const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
  const nextIndex = (currentIndex + 1) % totalCards;

  const visibleProjects = [
    testimonial[prevIndex],
    testimonial[currentIndex],
    testimonial[nextIndex],
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12 px-4 font-sans">
      <div className="max-w-[69rem] mx-auto">
        {/* Title */}
        <div className="text-center mb-12 py-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-teal-500 animate-pulse" size={40} />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              Completed Projects
            </h1>
            <Sparkles className="text-emerald-500 animate-pulse" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
        </div>

        {/* ALL PROJECTS */}
        <div className="relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div id="card-container" className="flex items-center justify-center w-full h-64 md:h-72 rounded-2xl overflow-hidden md:space-x-2">
            {visibleProjects.map((project, index) => {
              const isCenterCard = index === 1;
              return (
                <div
                  key={project.id}

                  className={`card h-full cursor-pointer shadow-lg ${isCenterCard ? 'active' : ''} ${index !== 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  <div className="card-overlay absolute inset-0"></div>
                  <div className="card-title absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold">{project.name}</h3>
                    <p className="agency-text text-white/80 text-sm mt-1">{project.Agency}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={showPrevCard}

            className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6 w-12 h-12 rounded-full flex items-center justify-center z-20
                       bg-teal-900/30 text-white backdrop-blur-sm border border-white/20
                       hover:bg-teal-900/60 transition-colors duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button
            onClick={showNextCard}

            className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6 w-12 h-12 rounded-full flex items-center justify-center z-20
                       bg-teal-900/30 text-white backdrop-blur-sm border border-white/20
                       hover:bg-teal-900/60 transition-colors duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 ease-out hover:from-teal-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <span>LEARN MORE</span>
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        #card-container {
            -webkit-perspective: 1000px;
            perspective: 1000px;
        }
        .card {
            flex: 1;
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
            min-width: 0;
            transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.5s ease-out;
           
            filter: grayscale(60%) brightness(0.7);
        }
        
        @media (max-width: 767px) {
            .card {
                filter: grayscale(0%) brightness(1);
            }
        }

        .card.active,
        #card-container:hover .card:hover {
            flex: 1.8;
            z-index: 10;
            filter: grayscale(0%) brightness(1);
        }
        #card-container:hover .card.active:not(:hover) {
            flex: 1;
        }
        .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%);
        }
        .card-title {
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            opacity: 0;
            transform: translateY(20px);
        }
        .card-title h3 {
            font-size: 1.25rem;
            letter-spacing: -0.025em;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .card-title .agency-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition-delay: 0.1s;
        }
        .card.active .card-title,
        #card-container:hover .card:hover .card-title {
            opacity: 1;
            transform: translateY(0);
        }
        #card-container:hover .card.active:not(:hover) .card-title {
            opacity: 0;
            transform: translateY(20px);
        }
        .card img {
            transition: transform 0.5s ease;
        }
        .card:hover img {
            transform: scale(1.05);
        }
        @media (max-width: 767px) {
            #card-container {
                height: 200px;
            }
            .card.active, #card-container:hover .card:hover {
                flex: 1; 
            }
            .card-title h3 {
                font-size: 1rem;
            }
            .card-title .agency-text {
                font-size: 0.75rem;
            }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;