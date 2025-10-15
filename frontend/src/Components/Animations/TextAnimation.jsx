import { useEffect, useState } from "react";

const RotatingText = () => {
  const words = ["IIT Kanpur", "CSJMF" ,"IIT Kanpur", "CSJMF" ];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 900);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1800);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block min-w-[200px] h-[1.2em] align-bottom">
      <span
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isAnimating
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {words[(index - 1 + words.length) % words.length]}
      </span>
      <span
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
};

// Demo showing how to use it
// const Demo = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
//       <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//         <span className="text-[#26438e]">Sustainability </span>
//         <br />
//         Through Eco-Centric
//         <br />
//         Approach <span className="text-black">
//           <RotatingText />
//         </span>
//       </h1>
//     </div>
//   );
// };

export default RotatingText;