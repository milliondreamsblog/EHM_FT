
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);

  // Detect scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.9", "0.6 1"], 
    // Start earlier (when element is 90% in view) 
    // and end before it's fully visible (smoother effect)
  });

  // Transform values
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]); 
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier ease
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
