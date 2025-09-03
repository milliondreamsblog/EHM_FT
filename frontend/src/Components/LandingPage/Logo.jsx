import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <section className="relative py-16  overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Tagline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-700 mt-2">
            Building Sustainable Futures with Our Clients
          </p>
        </div>

        {/* Logo Marquee */}
        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="mx-8 flex items-center justify-center"
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="p-4 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-emerald-100 hover:shadow-emerald-300/50 transition duration-300">
                <img
                  src={`/Client/${company}.png`}
                  alt={company}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Logo;
