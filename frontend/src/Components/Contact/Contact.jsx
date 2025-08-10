import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import API from "../../api/axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // store error from backend

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
          setFormData({ name: "", email: "", message: "" });
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-white/20">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Message Sent!
          </h2>
          <p className="text-gray-600">
            Thank you for reaching out. We'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="lg:w-2/5 bg-gradient-to-br from-emerald-500 to-teal-600 p-8 flex flex-col justify-between relative">
            <div className="absolute top-6 right-6">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                  alt="Support agent"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Let's Connect
              </h1>
              <p className="text-emerald-100 mb-6">
                Have questions or want to discuss a project? Our team is ready
                to help you find the best solutions.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-100">Address​</p>
                  <p>
                     CSJM Innovation Foundation Chhatrapati Shahu Ji 
                     <br></br>
                     Maharaj University, Kalyanpur, Kanpur - 208024
                  </p> 
                  
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-100">Call Us</p>
                  <a href="mailto:harshit@ehmconsultancy.co.in" className="text-white font-medium hover:underline">
                     +91 9892396408
                  </a>
                  <br></br>
                </div>
              </div>
            </div>
            
             <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-100">Email us at</p>

                  <a href="mailto:support@example.com" className="text-white font-medium hover:underline">
                    harshit@ehmconsultancy.co.in
                  </a>
                  <br></br>
                  <a href="mailto:support@example.com" className="text-white font-medium hover:underline">
                    info@ehmconsultancy.co.in

                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-8 w-8 h-8 bg-white/15 rounded-full animate-bounce"></div>
          </div>

          <div className="lg:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 text-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 border  border-gray-200 text-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
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
      </div>
    </div>
  );
}
