import Marquee from "react-fast-marquee";
import { partners } from "../../Data/Data";
import { motion } from "framer-motion";

const Partners_logo = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-green-10 via-emerald-50 to-green-10 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">
        

        {/* Logo Marquee */}
        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="mx-8 flex items-center justify-center"
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="p-4 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-emerald-100 hover:shadow-emerald-300/50 transition duration-300">
                <img
                  src={`/Partners/${partner}.png`}
                  alt={partner}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners_logo;
