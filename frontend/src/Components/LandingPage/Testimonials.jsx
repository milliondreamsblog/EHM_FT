// import { Sparkles, ChevronLeft, ChevronRight, Link } from 'lucide-react';
// import { useRef } from 'react';

// const cardData = [
//   {
//     title: 'Market Making',
//     description:
//       'Advised AT Kearney on carbon origination potential via regenerative agriculture for an agri-tech client',
//     logo: './Projects/img1.jpg',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Working to finance and scale biochar production in the western India using cotton feedstock',
//     logo: './Projects/img2.jpg',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
//     logo: './Projects/img9.jpg',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
//     logo: './Projects/img10.jpg',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
//     logo: './Projects/img8.jpeg',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
//     logo: './Projects/img7.png',
//   },
//   {
//     title: 'Market Making',
//     description:
//       'Sourcing high quality offsets for sale to Inverne’s downstream clients in Oil & Gas, through our partnership',
//     logo: './Projects/img6.png',
//   },

// ];

// const Testimonials = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <div className="mt-5">

//       <div className="text-center mb-12 py-8">
//         <div className="flex items-center justify-center gap-4 mb-6">
//           <Sparkles className="text-teal-500 animate-pulse" size={40} />
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
//             Completed Projects
//           </h1>
//           <Sparkles className="text-emerald-500 animate-pulse" size={40} />
//         </div>
//         <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
//       </div>


//       <div
//         className="relative mt-5 ml-10 bg-black overflow-hidden rounded-tl-2xl rounded-bl-2xl"
//         style={{ height: '57vh', width: 'calc(100% - 2.5rem)' }}
//       >
//         <div className="absolute inset-0">
//           <img
//             src="./leaf.jpg"
//             alt="Testimonials"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         </div>

//         <div className="relative z-10 w-full h-full px-10 py-10 flex flex-col text-white">
//           <div className="text-left mb-6">
//             <h2 className="text-3xl font-bold">Market Making Transactions</h2>
//             <p className="text-sm text-gray-200">
//               We deeply value our clients and their trust in our capabilities
//             </p>
//           </div>

//           <div className="relative flex flex-col h-full justify-between w-full">
//             <div
//               ref={scrollRef}
//               className="flex gap-8 overflow-x-auto pb-12 w-full no-scrollbar scroll-snap-x mandatory"
//               style={{ scrollbarWidth: 'none' }}
//             >
//               {cardData.map((card, idx) => (
//                 <div
//                   key={idx}
//                   className="relative rounded-xl shadow-md min-w-[300px] max-w-[320px] h-60 flex-shrink-0 overflow-hidden scroll-snap-start"
//                 >

//                   <img
//                     src={card.logo}
//                     alt={`Project ${idx}`}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />


//                   <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white ">
//                     <h3 className="text-lg font-semibold">{card.title}</h3>
//                     <p className="text-sm line-clamp-3">{card.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>


//           <div className="absolute bottom-3 left-20 transform -translate-x-1/2 flex gap-3">
//             <button
//               onClick={scrollLeft}
//               className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//     <div className="bg-gray-100 p-8 font-sans ">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg  p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-16">
//           <div className="md:w-3/5">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Our work beyond Market Making
//             </h2>
//             <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//               In line with our vision to expand the Natural Capital ecosystem, we do not shy away from opportunistically taking up assignments which we believe expand the pie for the overall market and add value to its stakeholders in the long run.
//             </p>
//           </div>
//           <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
//             <a 
//               className="inline-flex items-center justify-center px-10 py-2 bg-emerald-500 text-white font-semibold rounded-md shadow-sm hover:bg-emerald-600 transition-colors" 
//               href="/offerings"
//             >
//               See all services
//               <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>


//         <div className="bg-emerald-500 p-20 ">
//       <div className="container mx-auto px-4 py-24 sm:py-24">
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-36">
//           <div className="text-white text-center sm:text-left">
//             <p className="text-3xl sm:text-4xl font-light">
//               We'd <span className="font-bold">love</span> to hear your
//             </p>
//             <p className="text-3xl sm:text-4xl font-bold">
//               thoughts <span className="font-light">on our work</span>
//             </p>
//           </div>
//           <a 
//             className="inline-flex items-center justify-center px-16 py-3 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition-colors" 
//             href="/contact"
//           >
//             <span className="font-semibold text-sm">Contact us</span>
//             <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>

//     </div>
//   );
// };

// export default Testimonials;


import React, { useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
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
      'Sourcing high quality offsets for sale to Invernes downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img9.jpg',
  },
  {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Invernes downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img10.jpg',
  },
  {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Invernes downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img8.jpeg',
  },
  {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Invernes downstream clients in Oil & Gas, through our partnership',
    logo: './Projects/img7.png',
  },
  {
    title: 'Market Making',
    description:
      'Sourcing high quality offsets for sale to Invernes downstream clients in Oil & Gas, through our partnership',
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
    <div className="overflow-hidden">

      <ScrollRevealElements
        className="text-center mb-6 sm:mb-8 md:mb-12 py-4 sm:py-6 md:py-8 px-4"
        staggerAmount={0.5}
      >
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={24} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Completed Projects
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse hidden sm:block" size={24} />
        </motion.div>
        <motion.div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></motion.div>
      </ScrollRevealElements>


      <motion.div
        className="relative mt-5 bg-black overflow-hidden rounded-tl-2xl rounded-bl-2xl"
        style={{
          height: 'auto',
          minHeight: '400px',
          marginLeft: 'clamp(1rem, 2.5vw, 2.5rem)',
          width: 'calc(100% - clamp(1rem, 2.5vw, 2.5rem))'
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <img src="./leaf.jpg" alt="Testimonials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 flex flex-col text-white">
          <ScrollRevealElements className="text-left mb-4 sm:mb-6" staggerAmount={0.5}>
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Market Making Transactions</motion.h2>
            <motion.p className="text-xs sm:text-sm text-gray-200">
              We deeply value our clients and their trust in our capabilities
            </motion.p>
          </ScrollRevealElements>

          <div className="relative flex flex-col h-full justify-between w-full">
            <ScrollRevealElements
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-8 sm:pb-10 md:pb-12 w-full no-scrollbar scroll-snap-x mandatory"
              style={{ scrollbarWidth: 'none' }}
              staggerAmount={0.5}
            >
              {cardData.map((card, idx) => (
                <motion.div key={idx} className="relative rounded-xl shadow-md min-w-[250px] sm:min-w-[280px] md:min-w-[300px] max-w-[280px] sm:max-w-[300px] md:max-w-[320px] h-48 sm:h-52 md:h-60 flex-shrink-0 overflow-hidden scroll-snap-start">
                  <img src={card.logo} alt={`Project ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-3 sm:p-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">{card.title}</h3>
                    <p className="text-xs sm:text-sm line-clamp-3">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </ScrollRevealElements>
          </div>

          <ScrollRevealElements className="absolute bottom-2 sm:bottom-3 left-12 sm:left-16 md:left-20 transform -translate-x-1/2 flex gap-2 sm:gap-3" staggerAmount={0.5}>
            <motion.button onClick={scrollLeft} className="bg-white text-black p-1.5 sm:p-2 rounded-full shadow-md hover:bg-gray-100">
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button onClick={scrollRight} className="bg-white text-black p-1.5 sm:p-2 rounded-full shadow-md hover:bg-gray-100">
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </ScrollRevealElements>
        </div>
      </motion.div>


      <ScrollRevealElements
        className="bg-gray-100 p-4 sm:p-6 md:p-8 font-sans"
        staggerAmount={0.5}
      >
        <motion.div className="max-w-6xl mx-auto bg-white rounded-lg p-4 sm:p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 sm:gap-10 md:gap-16">
            <div className="md:w-3/5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our work beyond Market Making
              </h2>
              <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                In line with our vision to expand the Natural Capital ecosystem, we do not shy away from opportunistically taking up assignments which we believe expand the pie for the overall market and add value to its stakeholders in the long run.
              </p>
            </div>
            <div className="mt-4 md:mt-1 md:ml-6 flex-shrink-0">
              <a className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2 bg-emerald-500 text-white font-semibold rounded-md shadow-sm hover:bg-emerald-600 transition-colors text-sm" href="/offerings">
                See all services
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </ScrollRevealElements>


      <ScrollRevealElements
        className="bg-emerald-500 p-6 sm:p-10 md:p-16 lg:p-20"
        staggerAmount={0.5}
      >
        <motion.div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 lg:gap-36">
            <div className="text-white text-center sm:text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light">
                We'd <span className="font-bold">love</span> to hear your
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                thoughts <span className="font-light">on our work</span>
              </p>
            </div>
            <a className="inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-2.5 sm:py-3 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition-colors" href="/contact">
              <span className="font-semibold text-xs sm:text-sm">Contact us</span>
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </ScrollRevealElements>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Testimonials;