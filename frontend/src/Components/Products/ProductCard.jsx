import React from "react";

const ProductCard = ({ title, image, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
