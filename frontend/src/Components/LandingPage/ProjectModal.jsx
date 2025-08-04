import React, { useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full mx-4 bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
       
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.src}
            alt={project.title || 'Project'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

      
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            {project.title || 'EHM Project'}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description || 
              'This is an innovative EHM project that showcases our commitment to sustainable development and environmental conservation. Our team has worked tirelessly to create solutions that benefit both the community and the environment.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Project Impact</h3>
              <p className="text-sm text-green-700">
                {project.impact || 'Significant positive impact on local environment and community development.'}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Technologies Used</h3>
              <p className="text-sm text-blue-700">
                {project.technologies || 'Advanced sustainable technologies and eco-friendly materials.'}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Learn More
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 