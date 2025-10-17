import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

import avatar1 from "../../assets/testimgs/S1.avif";
import avatar2 from "../../assets/testimgs/S2.webp";
import avatar3 from "../../assets/testimgs/S3.webp";
import avatar4 from "../../assets/testimgs/S4.avif";
import avatar5 from "../../assets/testimgs/S5.jpg";
import avatar6 from "../../assets/testimgs/S6.jpg";
import avatar7 from "../../assets/testimgs/S7.webp";
import avatar8 from "../../assets/testimgs/S8.webp";
import avatar9 from "../../assets/testimgs/S9.webp";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(1, 2);
const secondColumn = testimonials.slice(2, 3);
const thirdColumn = testimonials.slice(3, 4);


const TestimonialsColumn = ({ className = "", testimonials, duration, direction = "up" }) => (
  <div className={className}>
    <motion.div
      animate={{ translateY: direction === "up" ? "-50%" : "0%" }}
      transition={{
        duration: duration || 15,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col mt-10 gap-6"
    >
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.username}
              className="p-5 border rounded-xl shadow-md bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700">{testimonial.text}</p>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={testimonial.imageSrc}
                  width={40}
                  height={40}
                  alt={`Avatar of ${testimonial.name}`}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium tracking-tight leading-5">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-500 text-sm leading-5">
                    {testimonial.username}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <ScrollRevealElements className="section-heading text-center" staggerAmount={0.5}>
          <SectionHeading>Testimonials</SectionHeading>
        </ScrollRevealElements>


        <motion.div
          className="mt-8 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] max-h-[738px] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} direction="up" />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={14} direction="down" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} direction="up" />
        </motion.div>
      </div>
    </section>
  );
};