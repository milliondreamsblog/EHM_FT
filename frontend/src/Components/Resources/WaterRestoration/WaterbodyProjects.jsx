import React from "react";
import { motion } from "framer-motion";

const WaterbodyProjects = ({ projectsData, hoveredProject, setHoveredProject }) => {
  return (
    <section className="bg-[#f6f6f6] pt-20 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800">
            Other <span className="text-[#10b981]">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-gray-100 min-h-[300px] md:min-h-[400px] border-2 border-[#3a3a3a0f]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {Object.keys(projectsData).map((key) => (
            <div
              key={key}
              onMouseEnter={() => setHoveredProject(key)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative overflow-hidden transition-all duration-500 ease-in-out flex-grow cursor-pointer h-[350px] sm:h-[400px] md:h-auto ${
                hoveredProject === key ? "md:w-2/3" : "md:w-1/3"
              }`}
            >
              <img
                loading="lazy"
                src={projectsData[key].image}
                alt={projectsData[key].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 z-10 transition-colors duration-300 ${
                  hoveredProject && hoveredProject !== key ? "bg-black/60" : "bg-black/0"
                }`}
              />
              <div className="relative z-20 h-full w-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black/55 to-transparent">
                <h3 className="text-xl text-[#26ffb7] sm:text-2xl font-bold">
                  {projectsData[key].title}
                </h3>
                <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  <div className="mt-2 sm:mt-4">
                    <p className="text-sm sm:text-base text-slate-200">
                      {projectsData[key].description}
                    </p>
                    {projectsData[key].details && (
                      <p className="mt-2 text-sm sm:text-base font-semibold">
                        {projectsData[key].details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WaterbodyProjects;
