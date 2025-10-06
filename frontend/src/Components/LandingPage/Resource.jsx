import { Sparkles } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';

const Resource = () => {
  const resources = [
    {
      id: 'dx¹',
      title: 'Webinars',
      description: 'We host a topical dialogue every month, bringing together an eclectic set of experts on the subject to share their learnings with climate finance practitioners',
      buttonText: 'Explore webinars',
      link: '/resources/webinar'
    },
    {
      id: 'dx²',
      title: 'Newsletter',
      description: 'We pen down a deep dive for 2-3 key developments in sustainable finance landscape, in our bi-weekly newsletter',
      buttonText: 'Read our newsletters',
      link: '/resources/casestudies'
    },
    {
      id: 'dx³',
      title: 'Research papers',
      description: 'We leverage our internal research capabilities alongside state-of-the-art academic insights to build new capabilities for our partner clients',
      buttonText: 'Explore our papers',
      link: '/resources/blogs'
    }
  ];

  return (
    <div className="h-full bg-gray-100 p-5 ">

      <ScrollRevealElements
        className="text-center mb-12 py-8"
        staggerAmount={0.5}
      >
        <motion.div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Resources
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </motion.div>
        <motion.div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></motion.div>
      </ScrollRevealElements>

      <div className="max-w-7xl mt-20 mb-10 mx-auto">

        <motion.div
          className="relative bg-gradient-to-br from-slate-700 to-slate-900 text-white p-8 rounded-xl mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0">
            <img className='w-full h-full object-cover' src="./seaa.jpg" alt="Background" />
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 bg-repeat"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)' }}>
          </div>
          <div className="absolute top-8 right-8 text-4xl md:text-5xl font-thin opacity-60 z-10">
            dx
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-light mb-3">Find our resources</h1>
            <p className="text-sm md:text-base opacity-90 leading-relaxed">
              dignissim volutpat mi maths blanenoper ut at sed risus mi. Magna ac<br className="hidden md:block" />
              themernt cras congue nibh id ipsum
            </p>
          </div>
        </motion.div>


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