import React from 'react';
import ServiceCard from './ServiceCard';

import islandImage from '../../assets/bioremediation-floating-island.jpeg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.png';
import services4 from '../../assets/services4.png';
import servicesBg from '../../assets/services-bg.gif'; 
import Logo from './Logo';


const ServicesSection = () => {
  return (
    <section className="bg-green-100 py-12 pt-0">
      {/* Hero Heading with Background */}
      <div
        className="relative w-full h-[600px] flex items-center justify-center text-center bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            End-to-end project delivery with efficiency, impact, and ease.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <p className='text-green-800 my-4 flex justify-center px-12 py-12 p-5'>Welcome to EHM, where our commitment to addressing environmental and climate change challenges is embodied in a diverse range of services. Rooted in the Sustainable Development Goals (SDGs) framework, EHM emerges as a reliable partner for industry and government organizations seeking strategic solutions. Explore the depth of our services and discover how EHM is shaping a greener, more sustainable future.</p>
      </div>

      {/* Logo here */}
      <div className="my-4 flex justify-center px-12 py-12 p-5">
        <Logo />
      </div>

      {/* Cards */}
      <div className="px-6 max-w-screen-xl mx-auto flex flex-col gap-5">
        <ServiceCard
          title="Bioremediation Floating Island"
          description="EMC implemented a bioremediation floating island as a nature-based solution to treat polluted water bodies. The system uses aquatic plants to absorb contaminants, improving water quality while enhancing local biodiversity."
          imageUrl={islandImage}
          fileUrl="/docs/bioremediation-case-study.pdf"
        />

        <ServiceCard
          title="Design of Environmental Systems"
          description="Focuses on creating integrated solutions to manage natural and built environments. It involves engineering and planning systems such as water treatment, waste management, and air pollution control to minimize environmental impact and promote sustainability."
          imageUrl={services2}
          fileUrl="/docs/mauritius-case-study.pdf"
        />

        <ServiceCard
          title="Sustainable Environmental Management"
          description="Involves the responsible use and protection of natural resources through practices that meet present needs without compromising future generations. It combines environmental science, policy, and economics to promote long-term ecological balance."
          imageUrl={services3}
          fileUrl="/docs/gujarat-case-study.pdf"
        />
        
        <ServiceCard
          title="Urban Planning and Management"
          description="Deals with the development and organization of cities and towns. It includes land use planning, infrastructure development, and policy implementation to ensure efficient, livable, and sustainable urban environments."
          imageUrl={services4}
          fileUrl="/docs/gujarat-case-study.pdf"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
