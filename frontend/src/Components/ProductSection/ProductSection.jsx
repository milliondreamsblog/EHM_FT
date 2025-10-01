import React from "react";
import ProductCard from "./ProductCard";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.png";
import productBg from "../../assets/bg-product.jpg";
import product4 from "../../assets/product4.jpeg";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.jpg";

import Logo from "../LandingPage/Logo";

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
  {
    title: "Grey Water Management",
    description: "Transparent data insights on your sustainability journey.",
    imageUrl: product4,
  },
  {
    title: "Modular Sewage Treatment Plant",
    description: "Transparent data insights on your sustainability journey.",
    imageUrl: product5,
  },
  {
    title: "Amrit Sarovar",
    description: "Transparent data insights on your sustainability journey.",
    imageUrl: product6,
  },
];

const ProductSection = () => {
  return (
    <section className="bg-green-100 py-12 pt-0">
      {/* Hero Heading with Background */}
      <div
        className="relative w-full h-[600px] flex items-center justify-center text-center bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${productBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Explore our unique eco-driven solutions designed to create a greener, sustainable future.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Learn More
          </button>
        </div>
      </div>


      <p className='text-green-800 my-4 flex justify-center px-12 py-12 p-5'>Welcome to EHM, where our commitment to addressing environmental and climate change challenges is embodied in a diverse range of services. Rooted in the Sustainable Development Goals (SDGs) framework, EHM emerges as a reliable partner for industry and government organizations seeking strategic solutions. Explore the depth of our services and discover how EHM is shaping a greener, more sustainable future.</p>

      {/* Logo here */}
      <div className="my-4 flex justify-center px-12 py-12 p-5">
        <Logo />
      </div>

      {/* Cards */}
      <div className="px-6 max-w-screen-xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default ProductSection;
