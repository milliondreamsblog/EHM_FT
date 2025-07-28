import React from 'react';
import bgImage from "../../assets/eco-bg.jpg";

import '../../index.css';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 animate-fade-in">
          SUSTAINABILITY THROUGH ECO-CENTRIC APPROACH
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in delay-300">
          Together we create a greener, more resilient future—powered by innovation and nature.
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 animate-fade-in delay-500">
          Know More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
