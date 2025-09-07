import { useEffect, useState } from "react";
import { companies } from "../../Data/Data";
import { motion } from "framer-motion";

const Logo = () => {
  const totalVisible = 8; // 2 rows x 4 columns
  const rotateCount = 2; // logos to rotate at once
  const [visibleLogos, setVisibleLogos] = useState(
    companies.slice(0, totalVisible)
  );
  const [nextIndex, setNextIndex] = useState(totalVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        const newLogos = [...prev];
        for (let i = 0; i < rotateCount; i++) {
          const replaceIndex = (nextIndex + i) % totalVisible;
          const companyIndex = (nextIndex + i) % companies.length;
          newLogos[replaceIndex] = companies[companyIndex];
        }
        return newLogos;
      });
      setNextIndex((prev) => (prev + rotateCount) % companies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <section className="relative py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Clean rectangular grid with dotted dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-200 divide-x divide-y divide-dotted divide-gray-300 bg-gray-50">
          {visibleLogos.map((company, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center p-4 bg-gray-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: (idx % rotateCount) * 0.2,
              }}
            >
              <img
                src={`/Client/${company}.png`}
                alt={company}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
