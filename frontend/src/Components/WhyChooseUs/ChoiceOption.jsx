import React from 'react';
import { Check } from 'lucide-react';
import { iconMap } from './iconMap.js';
// import Button from './Button.jsx';


export const ChoiceOption = ({ option, isSelected, onSelect }) => {
  const Icon = iconMap[option.icon] || iconMap.Sparkles;
  
  return (
    <div
      onClick={() => onSelect(option.id)}
      className={`
        relative p-5 cursor-pointer transition-all duration-300
        ${isSelected 
          ? 'bg-background border-l-2 border-title ' 
          : 'bg-white   '
        }
      `}
    >
      {isSelected && (
        <div className="absolute ">
          {/* <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"> */}
            {/* <Check className="w-4 h-4 text-white" /> */}
          {/* </div> */}
        </div>
      )}

      <div className="flex items-start gap-1">
        <div className={`transition-colors duration-300
          ${isSelected 
            ? 'bg-title text-white ' 
            : 'bg-title text-title hover:bg-title'
          }
        `}>
          {/* <Icon className="w-6 h-6" /> */}
        </div>
        
        <div className="flex-1">
          <h3 className={`
            text-[22px] font-Figtree  transition-colors duration-300
            ${isSelected ? 'text-[#2A2A2A]' : 'text-[#2A2A2A] hover:text-[#2A2A2A]'}
          `}>
            {option.title}
          </h3>
          <p className={`
            leading-relaxed transition-colors duration-300
            ${isSelected ? 'text-black' : 'text-slate-600 hover:text-slate-700'}
          `}>
            {option.description && <span className="font-normal font-Figtree"> {option.description}</span>}
          </p>
        </div>
      </div>

      <div className={`
        absolute inset-0  opacity-0 transition-opacity duration-300
        ${!isSelected ? 'hover:opacity-5 bg-title' : 'bg-title'}
      `}></div>

      
    </div>
  );
};
