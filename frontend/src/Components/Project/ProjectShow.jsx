// src/components/Project/ProjectShow.jsx
// This is the corrected code for your card component.

import React, { useState } from 'react';


import { MapPin, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap } from 'lucide-react';

const ProjectShow = ({
  image,
  title,
  description,
  status = "Completed",
  location,
  projectType,
  technologies,
  outcomes,
  className = "",
  style = {},
  onClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // Use the modern clipboard API with a fallback for older browsers
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
            .then(() => console.log('Link copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    } else {
        // Fallback for browsers that don't support the Clipboard API
        const dummyInput = document.createElement('input');
        document.body.appendChild(dummyInput);
        dummyInput.value = window.location.href;
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        console.log('Fallback: Link copied to clipboard!');
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-gray-100 mb-6 ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110 ${
            status === 'Completed' ? 'bg-green-100/90 text-green-800 border-green-200' :
            status === 'Ongoing' ? 'bg-blue-100/90 text-blue-800 border-blue-200' :
            'bg-gray-100/90 text-gray-800 border-gray-200'
          }`}>
            {status}
          </span>
        </div>

        {/* Project Type Badge */}
        {projectType && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-teal-100/90 text-teal-800 backdrop-blur-md border border-teal-200 shadow-lg transition-all duration-300 group-hover:scale-110">
              {projectType}
            </span>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button onClick={handleBookmark} aria-label="Bookmark project" className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${isBookmarked ? 'bg-yellow-100/90 text-yellow-600 border border-yellow-200' : 'bg-white/90 text-gray-600 border border-gray-200 hover:bg-yellow-100/90 hover:text-yellow-600'}`}>
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button onClick={handleShare} aria-label="Share project" className="p-2 rounded-full bg-white/90 text-gray-600 border border-gray-200 backdrop-blur-md hover:bg-teal-100/90 hover:text-teal-600 transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg leading-tight">{title}</h3>
          {location && <div className="flex items-center text-white/90 text-xs"><MapPin className="w-3 h-3 mr-1" />{location}</div>}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-5 space-y-4">
        {description && (
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Eye className="w-4 h-4 text-teal-600" /><h4 className="text-base font-bold text-gray-800">Overview</h4></div>
            <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>{description}</p>
            {description.length > 120 && (
              <button onClick={toggleExpanded} className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-xs transition-colors duration-300">
                {isExpanded ? <>Show Less <ChevronUp className="w-4 h-4" /></> : <>Read More <ChevronDown className="w-4 h-4" /></>}
              </button>
            )}
          </div>
        )}

        {(technologies?.length > 0 || outcomes?.length > 0) && (
          <div className="border-t border-gray-100 pt-3">
            <button onClick={toggleExpanded} className="flex items-center justify-between w-full p-2.5 bg-gray-50 hover:bg-teal-50 rounded-lg transition-all duration-300 group/btn">
              <span className="font-bold text-sm text-gray-800 flex items-center gap-2"><Target className="w-4 h-4 text-teal-600" />Technical Details & Outcomes</span>
              {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" /> : <ChevronDown className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />}
            </button>

            {isExpanded && (
              <div className="mt-3 space-y-4 animate-fadeIn">
                {technologies?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-teal-700 text-sm flex items-center gap-2"><Zap className="w-4 h-4" />Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">{technologies.map((tech, index) => <span key={index} className="px-2.5 py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 text-xs rounded-md font-medium border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105">{tech}</span>)}</div>
                  </div>
                )}
                {outcomes?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-green-700 text-sm flex items-center gap-2"><Award className="w-4 h-4" />Key Outcomes</h5>
                    <div className="space-y-1.5">{outcomes.map((outcome, index) => <div key={index} className="flex items-start gap-2 p-2 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors duration-300"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div><span className="text-gray-700 text-xs leading-relaxed">{outcome}</span></div>)}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"><span className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"><Eye className="w-4 h-4" />View Details</span></div>
          <button onClick={(e) => { e.stopPropagation(); onClick(); }} className="opacity-0 group-hover:opacity-100 px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 font-medium text-sm">Open<ExternalLink className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-3xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-teal-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-105"></div>
    </div>
  );
};

export default ProjectShow;

