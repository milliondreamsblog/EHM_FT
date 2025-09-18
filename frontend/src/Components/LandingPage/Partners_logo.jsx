import { Sparkles } from "lucide-react";
import { partners } from "../../Data/Data";
import { motion } from "framer-motion";

import img  from '../../assets/bg/logobg8.jpg'

const PartnersLogo = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Partners
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
      </div>
    <section className="relative py-16 overflow-hidden"  
      style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}
    
    >
       
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Partners Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 border border-gray-400 divide-x divide-y divide-dotted divide-gray-400  bg-current bg-clip-padding bg-opacity-50">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg cursor-pointer" // reduced padding from p-10 → p-6
              whileHover={{ scale: 1.12, rotate: [0, 2, -2, 0], boxShadow: "0 10px 20px rgba(34,197,94,0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.05 }}
            >
              <img
                src={`/Partners/${partner}.png`}
                alt={partner}
                className="h-20 md:h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default PartnersLogo;
