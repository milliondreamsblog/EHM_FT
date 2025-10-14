import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated, centered section heading with two underline bars.
 * Usage: <SectionHeading>Title</SectionHeading>
 */
const SectionHeading = ({ children }) => (
  <div className="text-center my-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
      {children}
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="block h-[3px] bg-purple-600 mt-2"
      ></motion.span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '25%', opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="block h-[2px] bg-purple-300 mx-auto mt-1"
      ></motion.span>
    </h2>
  </div>
);

export default SectionHeading;
