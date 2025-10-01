import React, { useState } from 'react';
import { choiceOptionsData } from './choiceOptions.js';
import { SectionHeader } from './SectionHeader';
import { OptionsList } from './OptionsList';
import { FeaturedImage } from './FeaturedImage';


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
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid lg:grid-cols-2 items-start">
          <div className='mr-28 '>
            <OptionsList 
                options={options}
                selectedOption={selectedOption}
                onOptionSelect={setSelectedOption}
            />
            {/* <div className='mt-4'>
                <Button variant="secondary" size="md">
                    Visit Site
                </Button>
            </div> */}
          </div>
          
          
         
            <FeaturedImage selectedChoice={selectedChoice} />
          
        </div>
      </div>
    </section>
  );
};
