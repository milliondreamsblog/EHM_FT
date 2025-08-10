import React from "react";
import Tilt from "react-parallax-tilt";

const ProductCard = ({ title, description, imageUrl, delay }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-6 text-left">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default ProductCard;
