import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RotatingText = () => {
  const words = ["IIT Kanpur", "CSJMF"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Variants for smooth enter/exit
  const wordVariants = {
    hidden: { opacity: 0, y: -20 }, // Start below, transparent
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }, // Slide up and out
  };

  return (
    <span className="relative inline-block min-w-[200px] h-[1.2em] align-bottom overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // Key forces exit/enter on change
          className="absolute inset-0"
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;