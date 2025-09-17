import { motion, useScroll, useTransform } from "framer-motion";
import WebinarCard from "./WebinarCard";
import { webinars } from "../../Data/webinars";

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Hexagon component (responsive sizes)
// Hexagon component (bigger + dynamic sizes)
const Hexagon = ({ children, className = "", size = { base: 100, md: 140, lg: 180 }, delay = 0 }) => {
  const currentSize = typeof size === "object" ? size.base : size;
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = currentSize / 2 + (currentSize / 2 - 2) * Math.cos(angle);
    const y = currentSize / 2 + (currentSize / 2 - 2) * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.2,
        rotate: 3,
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      }}
      className={`relative ${className}`}
      style={{ width: currentSize, height: currentSize }}
    >
      <svg width={currentSize} height={currentSize} className="absolute inset-0">
        <polygon
          points={points.join(" ")}
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
        />
      </svg>
      <motion.div
        className="absolute inset-1 flex items-center justify-center 
                   text-2xl sm:text-4xl md:text-5xl backdrop-blur-md"
        style={{
          clipPath:
            "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
        }}
        whileHover={{ scale: 1.25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};


// Hexagon icons
const illustrations = [
  <div className="flex items-center justify-center">🎤</div>,
  <div className="flex items-center justify-center">💻</div>,
  <div className="flex items-center justify-center">🌱</div>,
  <div className="flex items-center justify-center">👥</div>,
  <div className="flex items-center justify-center">▶</div>,
  <div className="flex items-center justify-center">🤖</div>,
];

const WebinarSection = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const layer1Y = useTransform(scrollY, [0, 500], [0, 50]);
  const layer2Y = useTransform(scrollY, [0, 500], [0, 100]);
  const layer3Y = useTransform(scrollY, [0, 500], [0, 150]);

  const NAVBAR_HEIGHT = 80;

  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative text-white overflow-hidden pt-24 sm:pt-32 md:pt-40"
        style={{
          backgroundImage: "url('')", // ✅ background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-green-600/40 -z-10" />

        {/* Parallax SVG Layers */}
        <motion.div
          style={{ y: layer1Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full opacity-50 -z-10"
        >
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.1)"
              d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160V320H0Z"
            ></path>
          </svg>
        </motion.div>

        <motion.div
          style={{ y: layer2Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full opacity-40 -z-10"
        >
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.15)"
              d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,122.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128V320H0Z"
            ></path>
          </svg>
        </motion.div>

        <motion.div
          style={{ y: layer3Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full opacity-30 -z-10"
        >
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.2)"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,250.7C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192V320H0Z"
            ></path>
          </svg>
        </motion.div>

        {/* Content Layer */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 relative z-10">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-2/5 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="block">Upcoming & Past</span>
              <span className="text-yellow-300">Webinars</span>
            </h2>
            <p className="text-gray-100 max-w-xl mx-auto lg:mx-0 mb-6 text-base sm:text-lg">
              Discover our latest webinars on sustainability, technology, and
              innovation. Stay informed and inspired.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg transition duration-300 shadow-md"
            >
              Join a Webinar
            </motion.button>
          </motion.div>

          {/* Hexagon Grid */}
          <div className="lg:w-3/5 flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="col-start-1 sm:col-start-2">
                <Hexagon delay={0.2}>{illustrations[0]}</Hexagon>
              </div>
              <div>
                <Hexagon delay={0.4}>{illustrations[1]}</Hexagon>
              </div>
              <div className="col-start-1">
                <Hexagon delay={0.6}>{illustrations[2]}</Hexagon>
              </div>
              <div>
                <Hexagon delay={0.8}>{illustrations[3]}</Hexagon>
              </div>
              <div>
                <Hexagon delay={1.0}>{illustrations[4]}</Hexagon>
              </div>
              <div className="col-start-1 sm:col-start-2">
                <Hexagon delay={1.2}>{illustrations[5]}</Hexagon>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-16 sm:h-20 md:h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192V320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Webinar Cards */}
      <div className="py-12 sm:py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar, i) => (
            <motion.div
              key={webinar.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
              }}
            >
              <WebinarCard webinar={webinar} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
