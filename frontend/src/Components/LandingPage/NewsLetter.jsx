// import React from 'react';

// export default function NewsLetter() {
//   return (
//     <div className="bg-white font-sans text-gray-800">
//       <div className=" flex items-start justify-start p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden folded-corner">
//         <main className="max-w-xl z-10">
//           <div className="flex flex-col space-y-8">
//             <div>
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                 Newsletter
//               </span>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <div className="bg-emerald-500 p-3 rounded-lg">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//                 </svg>
//               </div>
//             </div>
            
//            <div className='space-y-2'>
//              <h1 className="text-4xl font-bold text-gray-800 leading-tight font-montserrat">
//               Subscribe to our newsletter <br/>
//               <span className="text-gray-800 font-montserrat">Carbon Quantified</span>
//             </h1>
            
//             <p className="text-gray-600 max-w-md">
//               Bi-weekly newsletter covering the latest in environmental markets, with a significant bias for data
//             </p>
//            </div>
            
//             <div className="flex flex-col sm:flex-row gap-1">
//               <input 
//                 className="flex-grow px-24 py-3 rounded-lg border-0 bg-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-gray-800" 
//                 placeholder="Enter your Email Address" 
//                 type="email"
//               />
//               <button 
//                 className="bg-emerald-500 text-white font-semibold px-20 py-3 rounded-lg hover:bg-emerald-600 transition-colors" 
//                 type="submit"
//               >
//                 Subscribe
//               </button>
//             </div>
            
//             <div className="pt-4">
//               <a 
//                 className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors" 
//                 href="#"
//               >
//                 <span>Read the latest Edition</span>
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                   <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </main>
//       </div>
      
//       <style>{`
//         .folded-corner {
//           position: relative;
      
//         }
        
//         .folded-corner::before {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           right: 0;
//           border-width: 0 0 140px 140px;
//           border-style: solid;
//           border-color: transparent transparent #d1d5db transparent;
//           box-shadow: -15px -15px 20px rgba(0,0,0,0.2);
//           transition: all 0.3s ease;
//         }
        
//         .folded-corner::after {
//           content: "";
//           position: absolute;
//           bottom: 0px;
//           right: 120px;
//           width: 120px;
//           height: 120px;
//           transition: all 0.3s ease;
//           clip-path: polygon(100% 0, 0 100%, 100% 100%);
//           box-shadow: 10px 10px 15px rgba(0,0,0,0.1);
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function NewsLetter() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const linkRef = useRef(null);

  // Badge scroll effect
  const { scrollYProgress: badgeProgress } = useScroll({
    target: badgeRef,
    offset: ["start end", "end start"],
  });
  const badgeY = useTransform(badgeProgress, [0, 0.5], [100, 0]);
  const badgeOpacity = useTransform(badgeProgress, [0, 0.3, 0.5], [0, 0.5, 1]);

  // Icon scroll effect (delayed)
  const { scrollYProgress: iconProgress } = useScroll({
    target: iconRef,
    offset: ["start end", "end start"],
  });
  const iconY = useTransform(iconProgress, [0.1, 0.6], [100, 0]);
  const iconOpacity = useTransform(iconProgress, [0.1, 0.4, 0.6], [0, 0.5, 1]);

  // Heading scroll effect (more delayed)
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(headingProgress, [0.2, 0.7], [100, 0]);
  const headingOpacity = useTransform(headingProgress, [0.2, 0.5, 0.7], [0, 0.5, 1]);

  // Input scroll effect (even more delayed)
  const { scrollYProgress: inputProgress } = useScroll({
    target: inputRef,
    offset: ["start end", "end start"],
  });
  const inputY = useTransform(inputProgress, [0.3, 0.8], [100, 0]);
  const inputOpacity = useTransform(inputProgress, [0.3, 0.6, 0.8], [0, 0.5, 1]);

  // Link scroll effect (last)
  const { scrollYProgress: linkProgress } = useScroll({
    target: linkRef,
    offset: ["start end", "end start"],
  });
  const linkY = useTransform(linkProgress, [0.4, 0.9], [100, 0]);
  const linkOpacity = useTransform(linkProgress, [0.4, 0.7, 0.9], [0, 0.5, 1]);

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="flex items-start justify-start p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden folded-corner">
        <main className="max-w-xl z-10">
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <motion.div
              ref={badgeRef}
              style={{ y: badgeY, opacity: badgeOpacity }}
            >
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Newsletter
              </span>
            </motion.div>
            
            {/* Icon */}
            <motion.div
              ref={iconRef}
              className="flex items-center space-x-4"
              style={{ y: iconY, opacity: iconOpacity }}
            >
              <div className="bg-emerald-500 p-3 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            </motion.div>
            
            {/* Heading */}
            <motion.div
              ref={headingRef}
              className='space-y-2'
              style={{ y: headingY, opacity: headingOpacity }}
            >
              <h1 className="text-4xl font-bold text-gray-800 leading-tight font-montserrat">
                Subscribe to our newsletter <br/>
                <span className="text-gray-800 font-montserrat">Carbon Quantified</span>
              </h1>
              
              <p className="text-gray-600 max-w-md">
                Bi-weekly newsletter covering the latest in environmental markets, with a significant bias for data
              </p>
            </motion.div>
            
            {/* Input Form */}
            <motion.div
              ref={inputRef}
              className="flex flex-col sm:flex-row gap-1"
              style={{ y: inputY, opacity: inputOpacity }}
            >
              <input 
                className="flex-grow px-24 py-3 rounded-lg border-0 bg-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-gray-800" 
                placeholder="Enter your Email Address" 
                type="email"
              />
              <button 
                className="bg-emerald-500 text-white font-semibold px-20 py-3 rounded-lg hover:bg-emerald-600 transition-colors" 
                type="submit"
              >
                Subscribe
              </button>
            </motion.div>
            
            {/* Link */}
            <motion.div
              ref={linkRef}
              className="pt-4"
              style={{ y: linkY, opacity: linkOpacity }}
            >
              <a 
                className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors" 
                href="#"
              >
                <span>Read the latest Edition</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </main>
      </div>
      
      <style>{`
        .folded-corner {
          position: relative;
        }
        
        .folded-corner::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          border-width: 0 0 140px 140px;
          border-style: solid;
          border-color: transparent transparent #d1d5db transparent;
          box-shadow: -15px -15px 20px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        
        .folded-corner::after {
          content: "";
          position: absolute;
          bottom: 0px;
          right: 120px;
          width: 120px;
          height: 120px;
          transition: all 0.3s ease;
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
          box-shadow: 10px 10px 15px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}