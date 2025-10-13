import { motion } from "framer-motion";
import {
  FaIndustry,
  FaTrash,
  FaWater,
  FaLeaf,
  FaBuilding,
  FaTint,
} from "react-icons/fa";

const   WaterbodyRestoration = () => {
  const factors = [
    { icon: <FaIndustry />, label: "Industry Waste" },
    { icon: <FaTrash />, label: "Solid Waste Dumping" },
    { icon: <FaWater />, label: "Storm Water Drain" },
    { icon: <FaBuilding />, label: "Encroachment" },
    { icon: <FaLeaf />, label: "Dairy Waste" },
    { icon: <FaTint />, label: "Untreated Sewage" },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-6">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-800"
        >
          Restoration of Waterbody Ecosystem
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Reviving natural water ecosystems through sustainable management,
          innovation, and environmental stewardship.
        </p>
      </div>

      {/* MAJOR FACTORS */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">
          Major Factors
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {factors.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg"
            >
              <div className="text-3xl text-green-600 mb-2">{item.icon}</div>
              <p className="font-semibold text-gray-700 text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* flowchart */}

      {/* CASE STUDY */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 mb-20">
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Case Study: Antia Talab, Jhansi
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Antia Talab faced issues such as solid waste, excessive hyacinth,
          silting, and wastewater discharge. The restoration was executed under
          the Smart City Mission with focus on environmental and financial
          sustainability.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Before</h4>
            <img
              src="/WaterRestoration/antia-before.jpg"
              alt="Before Restoration"
              className="rounded-xl shadow-md h-[400px]"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">After</h4>
            <img
              src="/WaterRestoration/antia-after.jpg"
              alt="After Restoration"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="text-center mb-20">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Benefits</h3>
        <p className="text-gray-600 mb-6">
          Enhanced biodiversity, groundwater recharge, and sustainable urban
          resilience.
        </p>
        <img
          src="/WaterRestoration/benefits-wheel.png"
          alt="Benefits"
          className="mx-auto w-80 md:w-96"
        />
      </div>

      {/* OTHER PROJECTS */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-green-800 text-center mb-8">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-green-700">
              Laxmi Taal, Jhansi (Ongoing)
            </h4>
            <p className="text-gray-600 mb-4">
              DPR for Sustainable Management of Laxmi Taal Waterbody.
              <br />
              Area: 33.012 ha
            </p>
            <img
              src="/WaterRestoration/laxmi.jpg"
              alt="Laxmi Taal"
              className="rounded-lg w-[550px] h-[300px]"
            />
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-green-700">
              CSJM University Campus
            </h4>
            <p className="text-gray-600 mb-4">
              Design & commissioning of bioremediation floating islands in newly
              developed waterbody within CSJM campus.
            </p>
            <img
              src="/WaterRestoration/csjm.jpg"
              alt="CSJM Campus"
              className="rounded-lg h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Our Approach</h3>
        <p className="text-gray-600 mb-8">
          A holistic framework combining science, innovation, and community
          participation for sustainable waterbody restoration.
        </p>
        <img
          src="/WaterRestoration/approach.png"
          alt="Approach"
          className="mx-auto w-80  md:w-96"
        />
      </div>
    </section>
  );
};

export default WaterbodyRestoration;
