import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-green-10 via-emerald-50 to-green-10 overflow-hidden">
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
              className="group relative mx-8 flex items-center justify-center"
              whileHover={{ scale: 1.12, rotate: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
            >
              {/* Logo Card */}
              <div className="relative p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-emerald-100 transition duration-500 overflow-hidden group-hover:shadow-emerald-400/50 group-hover:shadow-xl">
                <img
                  src={`/Client/${company}.png`}
                  alt={company}
                  className="h-20 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="circular-overlay absolute inset-0 z-20 flex items-center justify-center 
                                bg-gradient-to-br from-emerald-700/80 via-green-700/70 to-black/70 
                                backdrop-blur-lg">
                  <span className="text-white text-lg font-semibold opacity-0 translate-y-3 
                                   transition-all duration-500 ease-out 
                                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
                    {company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Overlay Animation Styles */}
      <style jsx>{`
        .circular-overlay {
          clip-path: circle(0% at 50% 100%);
          transition: clip-path 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .circular-overlay {
          clip-path: circle(150% at 50% 100%);
        }
      `}</style>
    </section>
  );
};

export default Logo;
