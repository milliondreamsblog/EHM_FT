import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import API from "../../api/axios";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await API.post("/subscribe", { email });
      setEmail("");
      alert(res.data.message);
    } catch (err) {
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        console.log("Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#95c6a4] py-12 px-4 sm:px-8 lg:px-16">
      <footer className="mx-auto text-white rounded-2xl shadow-lg px-4 sm:px-6 py-8 sm:py-12 max-w-[1400px]">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
                alt="EHM Logo"
                className="h-10 w-12 sm:h-12 sm:w-16 rounded-lg shadow-lg bg-white p-1"
              />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900">
                  EHM CONSULTANCY
                </h3>
                <p className="text-green-950 text-xs sm:text-sm opacity-80">
                  Sustainable Solutions for Tomorrow
                </p>
              </div>
            </div>

            <p className="text-green-950 text-sm sm:text-base leading-relaxed opacity-90 max-w-md">
              Leading the way in environmental sustainability and carbon footprint reduction.
              Join us in creating a greener future for generations to come.
            </p>

            <div className="flex items-start space-x-3 text-green-950 opacity-90">
              <FaMapMarkerAlt className="text-green-700 mt-1 flex-shrink-0" />
              <div className="text-sm sm:text-base">
                <div>TECHNOPARK, IIT KANPUR</div>
                <div>Kalyanpur, Kanpur - 208016</div>
                <div>India</div>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold flex items-center space-x-2">
              <FaEnvelope className="text-green-700" />
              <span>Stay Updated</span>
            </h4>
            <p className="text-green-950 text-sm sm:text-base opacity-90">
              Get the latest news and updates on sustainability initiatives.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg focus:outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-200"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            <p className="text-xs sm:text-sm text-green-950 opacity-80">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Connect With Us</h4>
            <div className="flex space-x-4 flex-wrap sm:flex-nowrap">
              <a
                href="https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/"
                className="p-3 bg-green-700 rounded-lg hover:bg-green-800 transition-all"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
              <a
                href="https://x.com/EhmConsultancy"
                className="p-3 bg-green-700 rounded-lg hover:bg-green-800 transition-all"
              >
                <FaTwitter className="text-xl text-white" />
              </a>
            </div>
            <div className="pt-4 space-y-2 text-green-950 opacity-90 text-sm sm:text-base">
              <div><strong>Email:</strong> info@ehmconsultancy.co.in</div>
              <div><strong>Phone:</strong> +91 9892396408</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-300 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-green-950 opacity-90 text-xs sm:text-sm gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} EHM Consultancy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="#" className="hover:text-green-700">Privacy Policy</a>
            <a href="#" className="hover:text-green-700">Terms of Service</a>
            <a href="/contact" className="hover:text-green-700">Contact Us</a>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
