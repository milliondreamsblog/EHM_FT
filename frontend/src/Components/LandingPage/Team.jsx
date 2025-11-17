import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import SectionHeading from "../../Common/SectionHeading";

const Team = ({ title, members, limit }) => {
  const membersToDisplay = limit ? members.slice(0, limit) : members;

  return (
    <div id="team" className="relative font-sans overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-150/30 to-teal-50/50" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      <div className="relative py-12 flex flex-col items-center justify-center z-20">
        <SectionHeading>{title}</SectionHeading>

        <ScrollRevealElements
          className="w-full max-w-7xl px-6 flex flex-wrap justify-center gap-8"
          staggerAmount={0.3}
        >
          {membersToDisplay.map((member, index) => (
            <motion.div
              key={index}
              className="w-[230px] h-[320px] flex flex-col items-center bg-white rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* FIX: Fill area like before but avoid head cropping */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-44 object-cover object-top"
              />

              <div className="flex flex-col items-center p-4 text-center w-full">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  {member.social && (
                    <a
                      href={member.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-teal-600 font-medium">{member.title}</p>
                <p className="text-xs text-gray-500">{member.degree}</p>
              </div>
            </motion.div>
          ))}
        </ScrollRevealElements>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {limit && members.length > limit && (
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 ease-out hover:from-teal-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <span>LEARN MORE</span>
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
