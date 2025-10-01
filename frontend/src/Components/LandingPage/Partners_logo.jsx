import { Sparkles } from "lucide-react";
import { partners } from "../../Data/Data";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';

import img from '../../assets/bg/logobg8.jpg'

const PartnersLogo = () => {
  return (
    <div className="pt-16 pb-24 bg-gradient-to-b from-[#d7fff14b] to-[#d7fff14b]">


      <ScrollRevealElements
        className="text-center mb-12"
        staggerAmount={0.5}
      >
        <motion.div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Partners
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </motion.div>
        <motion.div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></motion.div>
      </ScrollRevealElements>

      <section className="relative py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6">

          <ScrollRevealElements
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 border border-gray-400 divide-x divide-y divide-dotted divide-gray-400 bg-current bg-clip-padding bg-opacity-50"
            staggerAmount={0.4}
          >
            {partners.map((partner, index) => (

              <motion.div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg cursor-pointer"
              >
                <img
                  src={`/Partners/${partner}.png`}
                  alt={partner}
                  className="h-20 md:h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </ScrollRevealElements>
        </div>
      </section>
    </div>
  );
};

export default PartnersLogo;