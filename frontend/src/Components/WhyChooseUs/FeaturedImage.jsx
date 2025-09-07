import React from 'react';
import { iconMap } from './iconMap';

export const FeaturedImage = ({ selectedChoice }) => {
  const Icon = iconMap[selectedChoice.icon] || iconMap.Sparkles;
  
  return (
    <div className="lg:sticky lg:top-8">
      <div className=" w-[500px] relative overflow-hidden rounded-2xl shadow-2xl  bg-white">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={selectedChoice.image}
            alt={selectedChoice.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-slate-800">{selectedChoice.title}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};
