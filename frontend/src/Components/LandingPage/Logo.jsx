import { companies } from "../../Data/Data";
import { motion } from "framer-motion";


import ScrollRevealElements from '../Animations/ScrollRevealElements';

const Logo = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('htps://img.freepik.com/premium-photo/fantasy-island-with-floating-waterfalls-octane-ren_1022456-71481.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Section Title */}

        <motion.h2
          className="text-xl md:text-2xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Leaders We Work With
        </motion.h2>


        <div className="max-h-[340px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-lg border border-dashed border-gray-200 bg-white/60 backdrop-blur-sm">


          <ScrollRevealElements
            className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-dashed divide-gray-300"
            staggerAmount={0.1}
          >
           {companies.map((company, idx) => (
            <motion.a
              key={idx}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center bg-white justify-center p-4 hover:bg-white/64 transition overflow-hidden group"
            >
              <img
                src={`/Client/${company.name}.png`}
                alt={company.name}
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:-translate-y-2"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium text-center">
                  {company.name}
                </p>
              </div>
            </motion.a>

            ))}
          </ScrollRevealElements>
        </div>


        <motion.p
          className="text-center text-gray-700 mt-4 text-sm animate-bounce"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Scroll down for more ↓
        </motion.p>
      </div>
    </section>
  );
};

export default Logo;