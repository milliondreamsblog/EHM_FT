import { Sparkles } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const Resource = () => {
  const resources = [
  {
    id: 'dx1',
    title: 'Webinars',
    description: 'We host a topical dialogue every month, bringing together an eclectic set of experts on the subject to share their insights with climate finance practitioners.',
    buttonText: 'Explore webinars',
    link: '/resources/webinar'
  },
  {
    id: 'dx2',
    title: 'Case Studies',
    description: 'We provide detailed case studies on two to three significant advancements shaping the global sustainable finance landscape and its evolution.',
    buttonText: 'Explore case studies',
    link: '/resources/casestudies'
  },
  {
    id: 'dx3',
    title: 'Blogs',
    description: 'We leverage our internal research capabilities alongside state-of-the-art academic insights to develop new capabilities for our partner clients.',
    buttonText: 'Explore our blogs',
    link: '/resources/blogs'
  }
];

  return (
  <div className="h-full px-16 bg-white p-5 ">

      <ScrollRevealElements className="text-center mb-6 py-4" staggerAmount={0.5}>
        <SectionHeading>Resources</SectionHeading>
      </ScrollRevealElements>

  <div
    className="rounded-lg py-6 px-4"
    style={{
      background: 'linear-gradient(to bottom, rgba(180,230,220,0.15), rgba(120,200,230,0.32), rgba(180,230,220,0.08))',
      WebkitBackgroundClip: 'padding-box'
    }}
  >
    {/* Compact radiant background applied — subtle, responsive, and keeps text readable */}
    <div className="mb-4" aria-hidden="true" />
        <ScrollRevealElements
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          staggerAmount={0.5}
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              className=""
            >
              <div className="absolute top-5 right-5 text-6xl md:text-7xl font-thin text-gray-200 font-serif">
                {resource.id}
              </div>
              <div className="relative z-10 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-slate-700 mb-5 font-montserrat">
                  {resource.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                  {resource.description}
                </p>
                <a href={resource.link || '#'}>
                  <div className="mt-auto">
                    <button
                      className="bg-green-600 text-white px-6 py-3 rounded-md font-medium text-sm flex items-center gap-2"
                    >
                      {resource.buttonText}
                      <span className="transition-transform duration-300">→</span>
                    </button>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </ScrollRevealElements>
      </div>
    </div>
  );
};

export default Resource;