import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/nature.mp4" type="video/mp4" />
          <img 
            src="/about-fallback.jpg" 
            alt="About us background" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <div className="max-w-4xl px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            We blend creativity with technology to craft extraordinary digital experiences.
            Founded in 2015, our team of passionate creators works tirelessly to bring
            innovative solutions to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-lg font-medium">
              Meet the Team
            </button>
            <button className="px-8 py-3 border-2 border-white hover:bg-white/10 transition-colors rounded-lg font-medium">
              Our Process
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
}