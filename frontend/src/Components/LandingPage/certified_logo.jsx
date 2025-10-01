import { certified } from "../../Data/Data";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';

const CertifiedLogo = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-green-10 via-emerald-50 to-green-10 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">

        <ScrollRevealElements
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 border border-gray-400 divide-x divide-y divide-dotted divide-gray-400 bg-gray-50"
          staggerAmount={0.5}
        >
          {certified.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 rounded-sm cursor-pointer"

              whileHover={{
                scale: 1.12,
                rotate: [0, 2, -2, 0],
                boxShadow: "0 10px 20px rgba(34,197,94,0.3)"
              }}

            >
              <img
                src={`/Certified/${cert}.png`}
                alt={cert}
                className="h-20 md:h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </ScrollRevealElements>
      </div>
    </section>
  );
};

export default CertifiedLogo;