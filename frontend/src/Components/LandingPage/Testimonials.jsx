import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


const cn = (...classes) => classes.filter(Boolean).join(' ');


export const testimoinalimg = [
  {
    "text": "Greening Dead City Zones",
    "img": "\women.avif",
    "name": "Ananya Sharma",
    "username": "@greenAnanya"
  },
  {
    "text": "Beach Cleanup Victory",
    "img": "\men.webp",
    "name": "Ravi Deshmukh",
    "username": "@raviForEarth"
  },
  {
    "text": "Solar Power for Villages",
    "img": "\women.avif",
    "name": "Fatima Khan",
    "username": "@sunshineFatima"
  },
  {
    "text": "Rainwater for Schools",
    "img": "\men.webp",
    "name": "Rahul Mehta",
    "username": "@rahulCares"
  },
  {
    "text": "Teaching Zero-Waste Living",
    "img": "\women.avif",
    "name": "Priya Sen",
    "username": "@ecoPriya"
  },
  {
    "text": "Restoring Riverbanks Together",
    "img": "\men.webp",
    "name": "Manoj Kumar",
    "username": "@manojForNature"
  },
  {
    "text": "Tech-Driven Tree Census",
    "img": "\women.avif",
    "name": "Sneha Raut",
    "username": "@snehaSustains"
  },
  {
    "text": "Community Composting Project",
    "img": "\men.webp",
    "name": "Nikhil Bansal",
    "username": "@ecoNikhil"
  },
  {
    "text": "Clean Air, Clear Vision",
    "img": "\women.avif",
    "name": "Divya Iyer",
    "username": "@divyaBreathesGreen"
  },
  {
    "text": "Inspired by Local Impact",
    "img": "\men.webp",
    "name": "Arjun Verma",
    "username": "@arjunForEarth"
  }
]

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
      {/* Enhanced gradient overlays */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50/95 via-emerald-50/70 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-emerald-50/95 via-emerald-50/70 to-transparent z-10" />

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
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100/50 flex flex-col items-center w-full max-w-[260px] px-6 py-7 mx-auto transition-all duration-300 hover:shadow-2xl hover:border-green-200/80 focus-within:shadow-2xl outline-none"
            key={idx}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)"
            }}
            whileTap={{ scale: 0.97 }}
            tabIndex={0}
            aria-label={`Testimonial from ${name}`}
            style={{ height: CARD_HEIGHT + 40 }}
          >
        
            <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-green-200 bg-white shadow-lg mb-4 flex items-center justify-center ring-2 ring-green-100">
              <img
                src={img || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                alt={name ? `Avatar of ${name}` : "User avatar"}
                className="object-cover w-full h-full"
                onError={e => { 
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"; 
                }}
              />
            </div>
           
       
            <div className="italic text-green-800 text-center mb-6 w-full text-sm font-medium leading-relaxed">
              "{text}"
            </div>
           
           
            <div className="flex flex-col items-center mt-auto w-full">
              <div className="font-bold text-green-700 text-base">{name}</div>
              <div className="text-xs text-green-500 font-medium">{username}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-20 overflow-hidden relative">
      <div className="mx-auto flex flex-col items-center relative z-10">
     
         <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="text-emerald-500 animate-pulse" size={32} />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
           Real Impact.Real Stories
          </h1>
          <Sparkles className="text-teal-500 animate-pulse" size={32} />
        </div>

        
        <div className="flex justify-center gap-8 flex-wrap mt-10 max-w-6xl w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TestimonialsColumn testimonials={getColumnData(0)} duration={30} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TestimonialsColumn testimonials={getColumnData(3)} duration={36} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TestimonialsColumn testimonials={getColumnData(6)} duration={33} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;