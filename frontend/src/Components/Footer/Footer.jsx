import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer
    className="w-full relative py-8 #4b7735 overflow-hidden text-blue-900"
  
  >
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      <div className="flex flex-col items-center md:items-start gap-3 md:w-1/3">
        <img src="https://startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_00004244/startup_logo/168067577328965.png" alt="EHM Logo" className="h-12 w-auto mb-2" />
        <div className="text-lg font-bold tracking-wide">EHM Footprint</div>
        <div className="text-sm text-blue-800 text-center md:text-left">
          123 Green Avenue<br />
          Eco City, EC 12345<br />
          India
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-3 md:w-1/3">
        <div className="font-semibold text-base">Subscribe to our Newsletter</div>
        <form className="flex w-full max-w-xs">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 rounded-l-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-r-md font-semibold hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
        <div className="text-xs text-blue-700">No spam. Unsubscribe anytime.</div>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3 md:w-1/3">
        <div className="font-semibold text-base">Connect with us</div>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="GitHub" className="hover:text-green-600 transition"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-green-600 transition"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter" className="hover:text-green-600 transition"><FaTwitter /></a>
        </div>
        <div className="text-xs text-blue-700">&copy; {new Date().getFullYear()} EHM Footprint. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer; 