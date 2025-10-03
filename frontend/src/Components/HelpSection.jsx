import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Components/Animations/ScrollRevealElements';

const HelpSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f9fbfa] py-12">

      <ScrollRevealElements
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
        staggerAmount={0.9}
      >
        {/* Left Text */}
        <motion.div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Need Help?</h2>
          <p className="text-gray-600">
            We will help you know everything about this product
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div className="mt-6 md:mt-0">
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Get in touch <ArrowRight size={18} />
          </button>
        </motion.div>
      </ScrollRevealElements>
    </section>
  );
};

export default HelpSection;