import React from 'react';
import { ChoiceOption } from './ChoiceOption';

export const OptionsList = ({ options, selectedOption, onOptionSelect }) => (
  <div className="space-y-0 ">
    {options.map((option) => (
      <ChoiceOption
        key={option.id}
        option={option}
        isSelected={selectedOption === option.id}
        onSelect={onOptionSelect}
      />
    ))}
  </div>
);