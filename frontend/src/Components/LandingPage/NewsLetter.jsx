import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';

export default function NewsLetter() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className=" flex items-start justify-start p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden folded-corner">
        <main className="max-w-xl z-10">

          <ScrollRevealElements
            className="flex flex-col space-y-8"
            staggerAmount={0.4}
          >

            <motion.div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Newsletter
              </span>
            </motion.div>

            <motion.div className="flex items-center space-x-4">
              <div className="bg-emerald-500 p-3 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            </motion.div>

            <motion.div className='space-y-2'>
              <h1 className="text-4xl font-bold text-gray-800 leading-tight font-montserrat">
                Subscribe to our newsletter <br />
                <span className="text-gray-800 font-montserrat">Carbon Quantified</span>
              </h1>
              <p className="text-gray-600 max-w-md">
                Bi-weekly newsletter covering the latest in environmental markets, with a significant bias for data
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-1">
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

            <motion.div className="pt-4">
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
          </ScrollRevealElements>
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