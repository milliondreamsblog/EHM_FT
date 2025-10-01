import React, { useState } from 'react';
import { choiceOptionsData } from './choiceOptions.js';
import { SectionHeader } from './SectionHeader';
import { OptionsList } from './OptionsList';
import { FeaturedImage } from './FeaturedImage';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';

export const WhyChooseSection = ({
  title = "Why Choose Us",
  subtitle = "",
  options = choiceOptionsData,
  defaultSelected = "curated"
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const selectedChoice = options.find(option => option.id === selectedOption) || options[0];

  return (
    <section className="min-h-screen bg-white py-16 px-16">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader title={title} subtitle={subtitle} />
        </motion.div>


        <ScrollRevealElements
          className="grid lg:grid-cols-2 items-start mt-12" // Added margin-top
          staggerAmount={0.9}
        >
          {/* Left Column */}
          <motion.div className='mr-28 '>
            <OptionsList
              options={options}
              selectedOption={selectedOption}
              onOptionSelect={setSelectedOption}
            />
          </motion.div>

          {/* Right Column */}
          <motion.div>
            <FeaturedImage selectedChoice={selectedChoice} />
          </motion.div>
        </ScrollRevealElements>
      </div>
    </section>
  );
};