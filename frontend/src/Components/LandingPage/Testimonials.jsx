import { Sparkles } from 'lucide-react';
import testimonial from '../../Data/Testimonial';

const Testimonials = () => {

  const getCardClasses = (span) => {
    const baseClasses = "rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out break-inside-avoid mb-4 border-2 border-green-200";
    
    switch (span) {
      case 'col-span-2':
        return `${baseClasses} min-h-[300px] md:col-span-2`; // wide cards
      default:
        return `${baseClasses} min-h-[250px]`; // regular cards
    }
  };

  return (
    <div className=" bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 py-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-teal-500 animate-pulse" size={40} />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
             Completed Project
            </h1>
            <Sparkles className="text-emerald-500 animate-pulse" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
        </div>
        
      
        <div className="block md:hidden space-y-4">
          {testimonial.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-6 shadow-lg min-h-[250px] border-2 border-green-200`}
            >
              <div className="flex gap-4 items-start h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-xl object-cover flex-shrink-0 border-2 border-green-300 hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <p className="text-gray-800 text-sm leading-relaxed font-medium mb-3">
                    {testimonial.message}
                  </p>
                  <div>
                    <p className="text-gray-700 font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      Agency: {testimonial.Agency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Masonry columns */}
        <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {testimonial.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} ${getCardClasses(testimonial.span)}`}
            >
              <div className="flex flex-col h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-32 object-cover rounded-xl mb-4 flex-shrink-0 border-2 border-green-300 hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-gray-800 font-semibold text-sm mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium mb-3 flex-1">
                    {testimonial.message}
                  </p>
                  <p className="text-gray-600 text-xs">
                    Agency: {testimonial.Agency}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;