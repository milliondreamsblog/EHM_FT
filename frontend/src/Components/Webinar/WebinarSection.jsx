import { motion, useViewportScroll, useTransform } from "framer-motion";
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

// Hexagon component
const Hexagon = ({ children, className = "", size = 100, delay = 0 }) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = size / 2 + (size / 2 - 2) * Math.cos(angle);
    const y = size / 2 + (size / 2 - 2) * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="absolute inset-0">
        <polygon
          points={points.join(" ")}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
      </svg>
      <motion.div
        className="absolute inset-1 flex items-center justify-center overflow-hidden text-3xl"
        style={{
          clipPath:
            "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
        }}
        whileHover={{ scale: 1.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Hexagon icons
const illustrations = [
  <div className="w-full h-full flex items-center justify-center">🎤</div>,
  <div className="w-full h-full flex items-center justify-center">💻</div>,
  <div className="w-full h-full flex items-center justify-center">🌱</div>,
  <div className="w-full h-full flex items-center justify-center">👥</div>,
  <div className="w-full h-full flex items-center justify-center">▶</div>,
  <div className="w-full h-full flex items-center justify-center">🤖</div>,
];

const WebinarSection = () => {
  const { scrollY } = useViewportScroll();

  // Parallax transforms
  const layer1Y = useTransform(scrollY, [0, 500], [0, 50]);
  const layer2Y = useTransform(scrollY, [0, 500], [0, 100]);
  const layer3Y = useTransform(scrollY, [0, 500], [0, 150]);

  const NAVBAR_HEIGHT = 80; // adjust to match your navbar

  return (
    <section>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 text-white overflow-hidden pt-32 md:pt-40">
        {/* Parallax Layers */}
        <motion.div
          style={{ y: layer1Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full bg-[url('/ParallexedWebinarImages/Layer_1-removebg-preview.png')] bg-cover bg-bottom"
        />
        <motion.div
          style={{ y: layer2Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full bg-[url('/ParallexedWebinarImages/Layer_2-removebg-preview.png')] bg-cover bg-bottom opacity-70"
        />
        <motion.div
          style={{ y: layer3Y, top: NAVBAR_HEIGHT }}
          className="absolute left-0 w-full h-full bg-[url('/ParallexedWebinarImages/Layer_3-removebg-preview.png')] bg-cover bg-bottom opacity-50"
        />

        {/* Content Layer */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-2/5 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              <span className="block">Upcoming & Past</span>
              <span className="text-yellow-300">Webinars</span>
            </h2>
            <p className="text-gray-100 max-w-xl mb-6 text-lg">
              Discover our latest webinars on sustainability, technology, and innovation. Stay informed and inspired.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-md"
            >
              Join a Webinar
            </motion.button>
          </motion.div>

          {/* Hexagon Grid */}
          <div className="lg:w-3/5 flex justify-center">
            <div className="grid grid-cols-4 gap-3">
              <div className="col-start-2">
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
              <div className="col-start-2">
                <Hexagon delay={1.2}>{illustrations[5]}</Hexagon>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,128L80,154.7C160,181,320,235,480,240C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Webinar Cards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, i) => (
            <motion.div
              key={webinar.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
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
