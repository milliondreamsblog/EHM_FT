import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust this for stagger timing between children
      delayChildren: 0.7   // Initial delay before staggering starts, based on your staggerAmount
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ScrollRevealElements = ({ children, className }) => {
  return (
    <div className={className}>
      <motion.div
        className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <ScrollRevealElements className="bg-emerald-500 p-6 sm:p-10 md:p-16 lg:p-20">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 lg:gap-36">
        <motion.div variants={itemVariants} className="text-white text-center sm:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light">
            We'd <span className="font-bold">love</span> to hear your
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            thoughts <span className="font-light">on our work</span>
          </p>
        </motion.div>
        <motion.a 
          variants={itemVariants}
          className="inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-2.5 sm:py-3 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition-colors" 
          href="/contact#form"
        >
          <span className="font-semibold text-xs sm:text-sm">Contact us</span>
          <svg 
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.a>
      </div>
    </ScrollRevealElements>
  );
};

export default ContactSection;