import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background video */}
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

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Our Story
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6 sm:mb-8">
            Born from a vision to create impact, we combine innovation and
            purpose to build solutions that inspire change and shape a
            sustainable future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/about#team"
              className="px-6 py-3 sm:px-8 sm:py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-lg font-medium text-sm sm:text-base"
            >
              Meet the Team
            </a>

            <button className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-white hover:bg-white/10 transition-colors rounded-lg font-medium text-sm sm:text-base">
              Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
