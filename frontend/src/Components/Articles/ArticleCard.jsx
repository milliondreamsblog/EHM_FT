import React from "react";

const ArticleCard = ({ title, image, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{content}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
