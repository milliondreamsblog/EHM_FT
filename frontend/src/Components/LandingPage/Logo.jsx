import { companies } from "../../Data/Data";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/fantasy-island-with-floating-waterfalls-octane-ren_1022456-71481.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-10">
          " The Leaders We Work With "
        </h2>

        {/* Scrollable grid with two visible rows */}
        <div className="max-h-[320px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-lg border border-dashed border-gray-200 bg-white/60 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-dashed divide-gray-300">
            {companies.map((company, idx) => (
              <motion.a
                key={idx}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 hover:bg-white/80 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <img
                  src={`/Client/${company.name}.png`}
                  alt={company.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Small scroll hint */}
        <p className="text-center text-gray-700 mt-4 text-sm animate-bounce">
          Scroll down for more ↓
        </p>
      </div>
    </section>
  );
};

export default Logo;
