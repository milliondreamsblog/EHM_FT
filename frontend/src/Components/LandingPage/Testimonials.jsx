import React from "react";
import { testimoinalimg } from "../../Data/Testimonial";
import "../../index.css";
import { motion } from "framer-motion";


const CARD_HEIGHT = 200; 
const GAP = 24; 
const COLUMN_HEIGHT = 600; 
const AVATAR_SIZE = 80; 

const REPEAT_COUNT = 6; 


const getColumnData = (start) => testimoinalimg.slice(start, start + 3);

const TestimonialsColumn = ({ testimonials, duration = 15 }) => {

  const repeated = Array(REPEAT_COUNT).fill(testimonials).flat();
  const numCards = repeated.length;
  const colContentHeight = numCards * CARD_HEIGHT + (numCards - 1) * GAP;

  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      className="relative overflow-hidden h-[600px] w-[300px] flex flex-col items-center group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
    
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/90 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent z-10" />

      <motion.div
        animate={{ y: [0, -colContentHeight / 2] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          pause: isPaused,
        }}
        className="flex flex-col gap-6"
        style={{ height: colContentHeight }}
      >
        {repeated.map(({ text, img, name, username }, idx) => (
          <motion.div
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-full max-w-[260px] px-6 py-7 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl outline-none"
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            tabIndex={0}
            aria-label={`Testimonial from ${name}`}
            style={{ height: CARD_HEIGHT + 40 }}
          >
         
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 bg-white shadow mb-4 flex items-center justify-center">
              <img
                src={img || "/EhmLogo.png"}
                alt={name ? `Avatar of ${name}` : "User avatar"}
                className="object-cover w-full h-full"
                onError={e => { e.target.onerror = null; e.target.src = "/EhmLogo.png"; }}
              />
            </div>
           
            <div className="italic text-blue-900 text-center mb-6 w-full text-lg font-semibold">"{text}"</div>
           
            <div className="flex flex-col items-center mt-auto w-full">
              <div className="font-bold text-blue-800 text-base">{name}</div>
              <div className="text-xs text-gray-500">{username}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center">
     
        </div>
        <h2 className="section-title animate-fade-in">Real stories. Real impact.</h2>
        <p className="section-description animate-fade-in delay-300 max-w-xl mx-auto">
          These stories come from individuals who turned their passion for the environment into real-world impact. From local cleanups to renewable energy initiatives, each voice reflects the power of community-driven change.
        </p>
        <div className="flex justify-center gap-6 flex-wrap mt-10 max-w-5xl w-full mx-auto">
          <TestimonialsColumn testimonials={getColumnData(0)} duration={30} />
          <TestimonialsColumn testimonials={getColumnData(3)} duration={36} />
          <TestimonialsColumn testimonials={getColumnData(6)} duration={33} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
