import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';

const RiskQuestionnaire = () => {
  // Sidebar data
  const sections = [
    {
      title: "Project Management",
      queries: [
        { id: "q1", label: "Query 1", question: "Does the project have an adaptive management plan in place that includes a monitoring plan?" },
        { id: "q2", label: "Query 2", question: "Is there a designated project manager responsible for oversight and coordination?" },
        { id: "mitigation", label: "Mitigation", question: "What mitigation measures are planned in case the project deviates from its objectives?" },
      ],
    },
    {
      title: "Financial Viability",
      queries: [
        { id: "finance1", label: "Projects Payback Period & Percent of funding", question: "Is the project financially viable considering the payback period and funding percentage?" },
        { id: "finance2", label: "Mitigation", question: "What financial mitigation strategies are planned if funding is delayed?" },
      ],
    },
    {
      title: "Opportunity Cost",
      queries: [
        { id: "opp1", label: "General", question: "Does pursuing this project create significant opportunity costs compared to alternatives?" },
      ],
    },
  ];

  const [activeQuery, setActiveQuery] = useState(sections[0].queries[0]);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (queryId, answer) => {
    setAnswers((prev) => ({ ...prev, [queryId]: answer }));
  };

  return (
    <section className="bg-[#e6f3ef] py-16 flex justify-center">

      <motion.div
        className="relative w-[1000px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outer Laptop Frame */}
        <div className="bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden">
          {/* Top Bezel with Camera */}
          <div className="bg-gray-900 flex justify-center items-center h-6 relative">
            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
          </div>

          {/* Title bar (Mac-style controls) */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <p className="mx-auto text-sm text-gray-600 font-medium">
              Internal Risk
            </p>
          </div>

          {/* Main Screen */}
          <div className="bg-white">
            <div className="flex">
              {/* Sidebar */}
              <aside className="w-1/3 border-r border-gray-200 p-4">
                {sections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {section.queries.map((query) => (
                        <li
                          key={query.id}
                          className={`px-3 py-2 rounded-md cursor-pointer ${activeQuery.id === query.id
                            ? "bg-green-600 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                            }`}
                          onClick={() => setActiveQuery(query)}
                        >
                          {query.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </aside>

              {/* Main Content */}
              <main className="flex-1 p-6">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">
                  {sections.find((s) =>
                    s.queries.some((q) => q.id === activeQuery.id)
                  )?.title || ""}
                </h2>
                <p className="text-lg text-gray-800 font-medium mb-6">
                  {activeQuery.question}
                </p>
                <div className="flex gap-4">
                  {["Yes", "No"].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(activeQuery.id, option)}
                      className={`px-6 py-2 border rounded-md transition ${answers[activeQuery.id] === option
                        ? "bg-green-600 text-white border-green-600"
                        : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="h-6 bg-gray-400 rounded-b-3xl flex justify-center items-center">
          <div className="h-1 w-24 bg-gray-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default RiskQuestionnaire;