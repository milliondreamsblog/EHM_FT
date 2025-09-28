
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const cardData = [
  {
    title: 'Market Making',
    description:
      'Advised AT Kearney on carbon origination potential via regenerative agriculture for an agri-tech client',
    logo: './Projects/img1.jpg',
  },
  {
    title: 'Market Making',
    description:
      'Working to finance and scale biochar production in the western India using cotton feedstock',
    logo: './Projects/img2.jpg',
  },
  {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img9.jpg',
  },
   {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img10.jpg',
  },
   {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img8.jpeg',
  },
   {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img7.png',
  },
   {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img6.png',
  },
   {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img5.png',
  },
  
  
 
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="mt-5">
      {/* Title Section */}
      <div className="text-center mb-12 py-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Completed Projects
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
      </div>

      {/* Leaf Container */}
      <div
        className="relative mt-5 ml-20 bg-black overflow-hidden rounded-tl-2xl rounded-bl-2xl"
  style={{ height: "55vh", width: "calc(100% - 5rem)" }}
      >
        
        <img
          src="./leaf.jpg"
          alt="Testimonials"
          className="absolute inset-0 w-full h-full object-cover"
        />

        
        <div className="relative z-10 w-full h-full px-10 py-10 flex flex-col text-white">
          <div className="text-left mb-6">
            <h2 className="text-3xl font-bold">Market Making Transactions</h2>
            <p className="text-sm text-gray-200">
              We deeply value our clients and their trust in our capabilities
            </p>
          </div>

<div className="relative flex flex-col h-full justify-between w-full">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto pb-12 w-full no-scrollbar scroll-snap-x mandatory"
    style={{ scrollbarWidth: 'none' }}
  >
    {cardData.map((card, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md min-w-[300px] max-w-[320px] h-48 flex-shrink-0 overflow-hidden flex items-center justify-center scroll-snap-start"
      >
        {card.logo && (
          <img
            src={card.logo}
            alt={`Project ${idx}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    ))}
  </div>

 
  <div className="absolute bottom-0 left-10 transform -translate-x-1/2 flex gap-3">
    <button
      onClick={scrollLeft}
      className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
    >
      <ChevronLeft size={20} />
    </button>
    <button
      onClick={scrollRight}
      className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Testimonials;
