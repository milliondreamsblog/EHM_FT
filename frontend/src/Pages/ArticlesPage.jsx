import React from "react";
import ArticleCard from "../Components/Articles/ArticleCard";

import natureImg from "../assets/nature.webp";
import aiImg from "../assets/ai.jpg";
import sustainableImg from "../assets/sustainable.png";

const articles = [
  {
    title: "Exploring the Beauty of Nature",
    image: natureImg,
    content:
      "Nature has always been a source of inspiration and peace. From towering mountains to flowing rivers...",
  },
  {
    title: "AI and the Future of Work",
    image: aiImg,
    content:
      "Artificial Intelligence is reshaping industries, creating new opportunities, and changing the job market...",
  },
  {
    title: "Sustainable Living: A Beginner's Guide",
    image: sustainableImg,
    content:
      "Adopting a sustainable lifestyle doesn’t have to be overwhelming. Simple changes can make a big impact...",
  },
];

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-green-100  pt-24 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Latest Articles
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
