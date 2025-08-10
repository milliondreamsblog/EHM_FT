import { useState } from "react";
import API from "../../api/axios";

const AdminLoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/admin/login", { email, password });
      localStorage.setItem("authorization", res.data.token);
      onLoginSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >✖</button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-[#35582a] mb-2">Admin Login</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-[#35582a] focus:ring-2 focus:ring-[#4b7735] focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-[#35582a] pr-12 focus:ring-2 focus:ring-[#4b7735] focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-[#35582a] hover:text-[#4b7735] focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showPassword ? (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </>
                ) : (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4b7735] text-white py-3 rounded-lg font-semibold hover:bg-[#35582a] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;