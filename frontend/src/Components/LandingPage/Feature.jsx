import React from 'react';
import { ExternalLink } from 'lucide-react';

const Feature = () => {
  const articles = [
    {
      id: 1,
      date: '3 NOVEMBER 2022',
      title: 'Carbon Network: Market Trends & Challenges',
      description: 'The Energy Conservation Bill 2022 amendment laid out the framework for establishing carbon credit markets in India by...',
      imageType: 'teal-lines',
      logo: 'Bloomberg'
    },
    {
      id: 2,
      date: '6 OCTOBER 2023',
      title: 'INTERVIEW: Indian startup bets on plastic credits market despite challenges',
      description: 'It has been estimated that up to $40 billion in annual funding is needed...',
      imageType: 'play-icon',
      logo: 'Carbon Pulse'
    },
    {
      id: 3,
      date: '20 JUNE 2023',
      title: 'Environmental Commodities Are Financial Instruments: Neelesh Agrawal, Calculus Carbon',
      description: 'Environmental commodities are financial instruments that can be increasingly used to mobilise capital...',
      imageType: 'conference',
      logo: 'BW BUSINESSWORLD'
    }
  ];

  const renderImage = (type) => {
    switch(type) {
      case 'teal-lines':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#003d33] to-[#005544] overflow-hidden rounded-lg">
            <div className="absolute inset-0 animate-slide">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-full w-[2px] bg-teal-400/15"
                  style={{ left: `${i * 3}%` }}
                />
              ))}
            </div>
          </div>
        );
      case 'play-icon':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#004d29] via-[#006837] to-[#008844] rounded-lg flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 border-[3px] border-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        );
      case 'conference':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#004d7a] to-[#008793] rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-6 left-6 text-left">
              <div className="text-white text-lg md:text-xl font-bold mb-1">Sustainable</div>
              <div className="text-white text-xs md:text-sm">FUTURE FORUM</div>
            </div>
            <div className="absolute bottom-6 right-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10" />
          </div>
        );
      default:
        return null;
    }
  };

  const renderLogo = (logo) => {
    switch(logo) {
      case 'Bloomberg':
        return (
          <div className="bg-gray-400 text-white px-5 py-2  text-xl  tracking-wide">
            Bloomberg
          </div>
        );
      case 'Carbon Pulse':
        return (
          <div className="flex items-center gap-1.5 text-gray-400 font-semibold text-sm">
            <span className="text-[30px]">▶</span>
            <span className='text-lg'>Carbon Pulse</span>
          </div>
        );
      case 'BW BUSINESSWORLD':
        return (
          <div className="font-semibold text-sm">
            <span className="text-gray-800 text-lg">BW</span>{' '}
            <span className="text-blue-400 text-lg">BUSINESSWORLD</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] max-h-[900px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
          Featured in
        </h1>

        <div className="space-y-4">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-gray-100 border-[1.5px] border-green-300 rounded-2xl p-5 sm:p-6 "
            >
              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-7">
                {/* Image Section */}
                <div className="w-full lg:w-[420px] h-44 sm:h-48 lg:h-[180px] flex-shrink-0">
                  {renderImage(article.imageType)}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-500 tracking-wide mb-2 sm:mb-2.5">
                    {article.date}
                  </div>
                  
                  <h2 className="text-lg sm:text-xl lg:text-[22px]  text-gray-700 leading-snug mb-2 sm:mb-2.5">
                    {article.title}
                  </h2>
                  
                  <p className="text-[13px] sm:text-sm text-gray-600 tracking-wide mb-3 sm:mb-4 flex-grow">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-auto">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-lg  text-gray-500  "
                    >
                      Read more
                      <ExternalLink className="w-[15px] h-[15px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    
                    <div className="flex items-center">
                      {renderLogo(article.logo)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(50px); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Feature;