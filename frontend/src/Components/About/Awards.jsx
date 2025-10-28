import React from 'react';
import { motion } from 'framer-motion';

const awardsData = [
  {
    id: 1,
    title: 'Best Sustainability Startup',
    date: '2024-05',
    description: 'Awarded by the Hon\'ble Governor of Uttar Pradesh for practical innovations in circular economy, wastewater reuse, and climate risk mitigation.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Top 75 Ideas under the LIFE Mission',
    date: '2023-11',
    description: 'Selected by the Ministry of Environment, Forest & Climate Change (MoEFCC), Government of India for scalable, eco-centric solutions.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🌱',
  },
  {
    id: 3,
    title: 'Graduate – GreenR Sustainability Accelerator',
    date: '2023-08',
    description: 'Organized by TechnoServe, supported by IKEA Foundation & Visa Foundation, recognizing EHM\'s high-impact climate-tech business model.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Convenor – AI for Sustainable Cities National Conference (Feb 2024)',
    date: '2024-02',
    description: 'Co-hosted with the Association of Indian Universities (AIU), CSJMU, and IIT Kanpur; convened 50+ universities and institutions to explore the role of AI in accelerating ESG, climate adaptation, and urban sustainability.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🤝',
    link: 'https://aisustainablecities.com',
  },
  {
    id: 5,
    title: 'Led AI Workshop at the Uttar Pradesh Vidhan Sabha',
    date: '2024-01',
    description: 'Conducted a high-level workshop on AI-driven climate governance, engaging MLAs, state officials, and policy leaders on technology for resilience and disaster preparedness.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🎤',
  },
  /*{
    id: 6,
    title: 'Expert Talk at NSUT (Netaji Subhas University of Technology)',
    date: '2023-10',
    description: 'Delivered a guest lecture on sustainability innovation and climate-tech entrepreneurship to architecture and planning students.'
      .replace(/\s+/g, ' ').trim(),
    icon: '📚',
  },*/
  {
    id: 7,
    title: 'Member Company – Technopark, IIT Kanpur',
    date: '2023-07',
    description: 'Selected for incubation and research collaboration under IIT Kanpur\'s Technopark, strengthening industry–academia partnerships in deep-tech sustainability.'
      .replace(/\s+/g, ' ').trim(),
    icon: '🔬',
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-28 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower.png')]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 lg:px-20">
        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
            Awards, Recognitions & Strategic Engagements
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="block h-[3px] bg-purple-600 mt-2"
            />
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '25%', opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="block h-[2px] bg-purple-300 mx-auto mt-1"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {awardsData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-emerald-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-t-3xl" />

              <div className="flex items-center mb-5">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className={`text-gray-700 text-base leading-relaxed ${item.link ? 'mb-5' : ''}`}>
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-emerald-700 font-semibold hover:text-emerald-900 transition-colors"
                ></a>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-200 to-transparent" />
    </section>
  );
};

export default AwardsSection;
