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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">


          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png"
                alt="EHM Logo"
                className="h-12 w-12 rounded-lg shadow-lg bg-white p-1 w-24"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  EHM CONSULTANCY
                </h3>
                <p className="text-slate-400 text-sm">Sustainable Solutions for Tomorrow</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Leading the way in environmental sustainability and carbon footprint reduction.
              Join us in creating a greener future for generations to come.
            </p>

            <div className="flex items-start space-x-3 text-slate-300">
              <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <div>TECHNOPARK, IIT KANPUR</div>
                <div> Kalyanpur, Kanpur - 208016</div>
                <div>India</div>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center space-x-2">
                <FaEnvelope className="text-green-400" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-slate-400 text-sm">
                Get the latest news and updates on sustainability initiatives.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                           placeholder-slate-500 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 
                         text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
                         focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-[1.02]
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            <p className="text-xs text-slate-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/"
                aria-label="LinkedIn"
                className="group p-3 bg-slate-800/50 rounded-lg hover:bg-blue-600 
                         transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-xl text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/EhmConsultancy"
                aria-label="Twitter"
                className="group p-3 bg-slate-800/50 rounded-lg hover:bg-sky-500 
                         transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-xl text-slate-300 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="pt-4 space-y-2">
              <div className="text-sm text-slate-400">
                <strong className="text-green-400">Email:</strong> info@ehmconsultancy.co.in
              </div>
              <div className="text-sm text-slate-400">
                <strong className="text-green-400">Phone:</strong> +91 9892396408
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">


            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-slate-400 hover:text-green-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;