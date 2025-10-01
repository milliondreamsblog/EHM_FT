
import { RxArrowRight } from 'react-icons/rx';

const KnowMoreButton = ({ onClick, className = '', children = 'Know More' }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`
        relative overflow-hidden px-6 py-3 bg-green-600 hover:bg-green-700 
        text-white font-semibold rounded-lg shadow-lg 
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        active:scale-95 active:translate-y-0
        group flex items-center gap-2 know-more-button
        ${className}
      `}
      aria-label={children}
      tabIndex={0}
    >
     
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
    
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <RxArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      
      
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
    </button>
  );
};

export default KnowMoreButton; 