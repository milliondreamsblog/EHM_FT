import React from "react";
import ProductCard from "../Components/Products/ProductCard";

// Import images from assets
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.png";
import { TestimonialsSection } from "../Components/LandingPage/testimonials1";

const products = [
  {
    title: "Eco Audit",
    image: product1,
    description: "In-depth audits for energy, water, and waste to boost sustainability.",
  },
  {
    title: "Sustainable Design",
    image: product2,
    description: "Design solutions that blend innovation with environmental responsibility.",
  },
  {
    title: "Green Certification",
    image: product3,
    description: "Helping organizations achieve globally recognized green certifications.",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-green-50 pt-24 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <TestimonialsSection />
    </div>
  );
};

export default ProductsPage;
