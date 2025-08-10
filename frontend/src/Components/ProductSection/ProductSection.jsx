import React from "react";
import ProductCard from "./ProductCard";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.png";

const productData = [
  {
    title: "Eco Audit",
    description: "In-depth audits for energy, water, and waste to boost sustainability.",
    imageUrl: product1,
  },
  {
    title: "Sustainable Design",
    description: "Design solutions that blend innovation with environmental responsibility.",
    imageUrl: product2,
  },
  {
    title: "Impact Reports",
    description: "Transparent data insights on your sustainability journey.",
    imageUrl: product3,
  },
];

const ProductSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-lime-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
        <p className="text-lg text-gray-600 mb-12">Explore our unique eco-driven services</p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
