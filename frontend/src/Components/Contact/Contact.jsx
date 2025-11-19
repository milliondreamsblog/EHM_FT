import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import API from "../../api/axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await API.post("/contact", formData);

      if (res.data.sucess) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", mobile: "", interestedIn: "", message: "" });
        }, 3000);
      }
    } catch (err) {
      if (err.response?.data?.error) {
        const firstError = Object.values(err.response.data.error)[0]?.[0];
        setErrorMsg(firstError || "Something went wrong. Please try again.");
      } else {
        setErrorMsg("Unable to send message. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center border border-green-200">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
          <p className="text-green-700">Thank you for reaching out. We'll get back to you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div  className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-green-200">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">Get in Touch</h1>
        {errorMsg && <div className="p-3 bg-red-100 text-red-700 rounded mb-6">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-green-800">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 text-gray-900"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-green-800">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 text-gray-900"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-green-800">Mobile Number (optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 text-gray-900"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>

         
<div>
  <label className="block text-sm font-medium mb-1 text-green-800">Interested In</label>
  <select
    name="interestedIn"
    value={formData.interestedIn}
    onChange={handleChange}
    required
    className="w-full pl-3 pr-4 py-3 border border-green-300 rounded-xl bg-green-50 text-green-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 hover:bg-green-100"
  >
    <option value="" disabled></option>
    <option value="Services Inquiry">Services Inquiry</option>
    <option value="Partnership / Collaboration">Partnership / Collaboration</option>
    <option value="Careers / Work with Us">Careers / Work with Us</option>
    <option value="Training & Workshops">Training & Workshops</option>
    <option value="General Inquiry">General Inquiry</option>
  </select>
</div>


          
 <div className="relative">
  <label className="block text-sm font-medium mb-1 text-green-800">Your Message</label>
  <div className="relative">
    <div className="absolute top-3 left-3">
      <MessageSquare className="w-5 h-5 text-green-400" />
    </div>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="5"
      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 resize-none 
                 bg-white text-gray-900 placeholder-gray-400"
      placeholder="How can we help you?"
    ></textarea>
  </div>
</div>


      
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-emerald-500 to-green-400 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
