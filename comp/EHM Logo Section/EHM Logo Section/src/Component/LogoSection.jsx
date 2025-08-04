import React from 'react';

const InfiniteLogoLoop = () => {
  
  const logos = [
    { id: 1, name: 'CSIR', image: 'src/assets/Client Logos/csir_logo1.png' },
    { id: 2, name: 'CSIR-NEERI', image: 'src/assets/Client Logos/CSIR- NEERI.png' },
    { id: 3, name: 'CSJMU', image: 'src/assets/Client Logos/CSJMU  copy.png' },
    { id: 4, name: 'Jhansi Nagar Nigam', image: 'src/assets/Client Logos/Jhansi Nagar Nigam.jpeg' },
    { id: 5, name: 'Jhansi Smart City', image: 'src/assets/Client Logos/Jhansi smart city.jpeg' },
    { id: 6, name: 'Kanpur Smart City', image: 'src/assets/Client Logos/Kanpur smart city.jpeg' },
    { id: 7, name: 'Parivartan', image: 'src/assets/Client Logos/Parivartan logo.png' },
    { id: 8, name: 'Prachi Leathers', image: 'src/assets/Client Logos/Prachi leathers.png' },
    { id: 9, name: 'Partner 9', image: 'src/assets/Client Logos/Picture3.png' },
    { id: 10, name: 'Telangana Govt', image: 'src/assets/Client Logos/png-transparent-government-of-telangana-telangana-state-council-of-higher-education-telangana-state-public-service-commission-state-government-kcr-label-logo-state.png' },
    { id: 11, name: 'Partner 11', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=150&h=150&fit=crop&crop=center' },
  ];

 
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="min-h-32 bg-gradient-to-br from-emerald-50 via-green-100 to-teal-200 flex items-center justify-center overflow-hidden relative">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-0 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-0 bg-emerald-300/40 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-0 bg-teal-200/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-lime-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12 relative z-10">
          Our Partners
        </h1>
        
        <div className="relative overflow-hidden">
         
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 transition-transform duration-500 hover:scale-[2] hover:z-20 relative"
              >
                <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-green-200/50 hover:border-emerald-400/70 hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="w-20 h-20 object-cover rounded-full transition-all duration-500"
                  />
                </div>
                <p className="text-gray-700 text-sm text-center mt-2 font-medium opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
          
          
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-emerald-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none z-10"></div>
        </div>
        
       
        <div className="relative overflow-hidden mt-16">
          <div className="flex animate-scroll-reverse">
            {duplicatedLogos.reverse().map((logo, index) => (
              <div
                key={`reverse-${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 transition-transform duration-500 hover:scale-[2] hover:z-20 relative"
              >
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-3 border-green-100/60 hover:border-teal-300/80 hover:shadow-xl hover:bg-white transition-all duration-500 opacity-75 hover:opacity-100 overflow-hidden">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="w-16 h-16 object-cover rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
          
          
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-emerald-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }
        
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteLogoLoop;