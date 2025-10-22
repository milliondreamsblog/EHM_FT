// src/components/Project/ProjectShow.jsx
// Enhanced version with more appealing top section

import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap, Sparkles } from 'lucide-react';

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
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
        .then(() => console.log('Link copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    } else {
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
      className={`group relative bg-gradient-to-br from-white via-white to-teal-50/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.03] cursor-pointer border border-gray-200/50 mb-6 ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-teal-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-700"></div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

      {/* Project Image */}
      <div className="relative overflow-hidden h-64">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
        />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 via-blue-600/20 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Animated Sparkle Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Sparkles className="w-12 h-12 text-white/20 animate-pulse" />
        </div>

        {/* Enhanced Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl border-2 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 flex items-center gap-1.5 ${
            status === 'Completed' ? 'bg-gradient-to-r from-green-400/95 to-emerald-500/95 text-white border-green-300/50 shadow-green-500/50' :
            status === 'Ongoing' ? 'bg-gradient-to-r from-blue-400/95 to-cyan-500/95 text-white border-blue-300/50 shadow-blue-500/50' :
            'bg-gradient-to-r from-gray-400/95 to-slate-500/95 text-white border-gray-300/50 shadow-gray-500/50'
          }`}>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {status}
          </span>
        </div>

        {/* Enhanced Project Type Badge */}
        {projectType && (
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-teal-400/95 to-blue-500/95 text-white backdrop-blur-xl border-2 border-teal-300/50 shadow-2xl shadow-teal-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              {projectType}
            </span>
          </div>
        )}

        {/* Enhanced Hover Action Buttons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={handleBookmark} 
            aria-label="Bookmark project" 
            className={`p-3 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-125 hover:-rotate-12 shadow-lg ${
              isBookmarked 
                ? 'bg-gradient-to-br from-yellow-400/95 to-orange-500/95 text-white border-2 border-yellow-300/50 shadow-yellow-500/50' 
                : 'bg-white/95 text-gray-700 border-2 border-white/50 hover:bg-gradient-to-br hover:from-yellow-400/95 hover:to-orange-500/95 hover:text-white hover:border-yellow-300/50'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={handleShare} 
            aria-label="Share project" 
            className="p-3 rounded-xl bg-white/95 text-gray-700 border-2 border-white/50 backdrop-blur-xl hover:bg-gradient-to-br hover:from-teal-400/95 hover:to-blue-500/95 hover:text-white hover:border-teal-300/50 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Enhanced Title Overlay with Glass Effect */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-2xl leading-tight tracking-tight group-hover:text-teal-200 transition-colors duration-300">
            {title}
          </h3>
          {location && (
            <div className="flex items-center text-white/95 text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/20">
              <MapPin className="w-4 h-4 mr-1.5 text-teal-300" />
              {location}
            </div>
          )}
        </div>

        {/* Animated Border Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-5 md:p-6 space-y-4 bg-white/50 backdrop-blur-sm">
        {description && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-bold text-gray-800">Overview</h4>
            </div>
            <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {description}
            </p>
            {description.length > 120 && (
              <button 
                onClick={toggleExpanded} 
                className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-xs transition-all duration-300 hover:gap-2 bg-teal-50 px-3 py-1.5 rounded-lg hover:bg-teal-100"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            )}
          </div>
        )}

        {(technologies?.length > 0 || outcomes?.length > 0) && (
          <div className="border-t border-gray-200 pt-4">
            <button 
              onClick={toggleExpanded} 
              className="flex items-center justify-between w-full p-3 bg-gradient-to-r from-gray-50 to-teal-50 hover:from-teal-50 hover:to-blue-50 rounded-xl transition-all duration-300 group/btn border border-gray-200/50 hover:border-teal-300/50 hover:shadow-md"
            >
              <span className="font-bold text-sm text-gray-800 flex items-center gap-2">
                <div className="p-1 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Technical Details & Outcomes
              </span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-4 animate-fadeIn">
                {technologies?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-teal-700 text-sm flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 text-xs rounded-lg font-medium border border-teal-200 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {outcomes?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-green-700 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Outcomes
                    </h5>
                    <div className="space-y-1.5">
                      {outcomes.map((outcome, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2 p-2 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs leading-relaxed">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Enhanced Card Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300">
              <Eye className="w-4 h-4" />
              View Details
            </span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onClick(); }} 
            className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
          >
            Open
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Enhanced Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/50 rounded-3xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-105"></div>
    </div>
  );
};

export default ProjectShow;