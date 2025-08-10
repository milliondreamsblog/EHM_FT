import React from 'react';
import ServiceCard from './ServiceCard';

import islandImage from '../../assets/bioremediation-floating-island.jpeg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.png';
import services4 from '../../assets/services4.png';
import { Sparkles } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-12 px-6 max-w-screen-xl mx-auto">
      
        <div className="text-center mb-12 py-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Sparkles className="text-teal-500 animate-pulse" size={40} />
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Services
                      </h1>
                      <Sparkles className="text-emerald-500 animate-pulse" size={40} />
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
                  </div>
      
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

      
    </section>
  );
};

export default ServicesSection;
