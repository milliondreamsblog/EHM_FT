import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';

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
    <div className="mt-5 overflow-hidden">

      <ScrollRevealElements
        className="text-center mb-12 py-8"
        staggerAmount={0.5}
      >
        <motion.div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Completed Projects
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </motion.div>
        <motion.div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></motion.div>
      </ScrollRevealElements>


      <motion.div
        className="relative mt-5 ml-10 bg-black overflow-hidden rounded-tl-2xl rounded-bl-2xl"
        style={{ height: '57vh', width: 'calc(100% - 2.5rem)' }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <img
            src="./leaf.jpg"
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 w-full h-full px-10 py-10 flex flex-col text-white">
          <ScrollRevealElements className="text-left mb-6" staggerAmount={0.5}>
            <motion.h2 className="text-3xl font-bold">Market Making Transactions</motion.h2>
            <motion.p className="text-sm text-gray-200">
              We deeply value our clients and their trust in our capabilities
            </motion.p>
          </ScrollRevealElements>

          <div className="relative flex flex-col h-full justify-between w-full">
            <ScrollRevealElements
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-12 w-full no-scrollbar scroll-snap-x mandatory"
              style={{ scrollbarWidth: 'none' }}
              staggerAmount={0.5}
            >
              {cardData.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="relative rounded-xl shadow-md min-w-[300px] max-w-[320px] h-60 flex-shrink-0 overflow-hidden scroll-snap-start"
                >
                  <img
                    src={card.logo}
                    alt={`Project ${idx}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white ">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm line-clamp-3">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </ScrollRevealElements>
          </div>

          <ScrollRevealElements
            className="absolute bottom-3 left-20 transform -translate-x-1/2 flex gap-3"
            staggerAmount={0.5}
          >
            <motion.button
              onClick={scrollLeft}
              className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </motion.button>
          </ScrollRevealElements>
        </div>
      </motion.div>


      <div className="bg-gray-200 p-10 flex items-center justify-center rounded-12xl">
        <ScrollRevealElements
          className="w-full bg-gray-100 rounded-lg px-10 py-10"
          staggerAmount={0.3}
        >
          <motion.div className="flex justify-between items-start gap-10">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl font-bold text-black mb-5 leading-tight">
                Our work beyond Market Making
              </h1>
              <p className="text-base leading-relaxed text-gray-800">
                In line with our vision to expand the Natural Capital ecosystem, we do not shy away from opportunistically taking up assignments which we believe expand the pie for the overall market and add value to its stakeholders in the long run
              </p>
            </div>
            <div className="pt-2">
              <a href='/ServicePage'>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-7 py-3.5 rounded flex items-center gap-2.5 transition-colors whitespace-nowrap">
                  See all services
                  <span className="text-lg font-bold">→</span>
                </button>
              </a>
            </div>
          </motion.div>
        </ScrollRevealElements>
      </div>
    </div>
  );
};

export default Testimonials;