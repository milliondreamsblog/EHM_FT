import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import { motion } from "framer-motion";
const LogoScroll = () => {
  return (
    <section className="relative py-8 bg-cover bg-center overflow-y-hidden">
      <div className="absolute inset-0 bg-white backdrop-blur-sm overflow-y-hidden"></div>
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
      </div>
      <div className="relative container mx-auto px-6 text-center overflow-y-hidden">
        <div className="w-full overflow-y-hidden">
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            loop={0} // infinite
            direction="left" // Ensure horizontal scrolling
          >
            {companies.map((company, idx) => (
              <a
                key={idx}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center p-4 hover:bg-white/64 transition group overflow-y-hidden"
              >
                <img
                  src={`/Client/${company.name}.png`}
                  alt={company.name}
                  className="h-16 md:h-20 w-auto overflow-hidden object-contain transition-transform group-hover:-translate-y-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium text-center">
                    {company.name}
                  </p>
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;
