import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminName, setAdminName] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);

  // Create Admin
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [creatingAdmin, setCreatingAdmin] = useState(false);

  // Subscribers 
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Fetch admin info 
 useEffect(() => {
  API.get("/admin/me")
    .then(res => {
      console.log("Admin info:", res.data);
      setAdminName(res.data.AdminName || "Admin");
    })
    .catch(err => {
      console.error("Admin info error:", err);
      setAdminName("Admin");
    });
}, []);

  // Fetch subscribers 
  useEffect(() => {
    if (activeTab === "subscribers") {
      setLoadingSubs(true);
      API.get("/admin/subscribers")
        .then(res => {
          // Sort by createdAt descending
          const sorted = res.data.subscribers.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setSubscribers(sorted);
          setLoadingSubs(false);
        })
        .catch(() => setLoadingSubs(false));
    }
  }, [activeTab]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    navigate("/");
  };

  // Create Admin 
  const handleCreateAdmin = async (e) => {
  e.preventDefault();
  setCreatingAdmin(true);
  try {
    const res = await API.post("/admin/create", {
      AdminName: newAdminName,
      email: newAdminEmail,
      password: newAdminPassword,
    });
    alert(res.data.message || "New admin created successfully!");
    setNewAdminName("");
    setNewAdminEmail("");
    setNewAdminPassword("");
  } catch (err) {
   
    alert(err.response?.data?.message || "Failed to create admin");
  }
  setCreatingAdmin(false);
};

  return (
    <div className="min-h-screen bg-[#4b7735]">
      {/* nevbar of dashboard */}
      <nav className="flex justify-between items-center bg-[#35582a] px-6 py-3 text-white shadow">
        <a href="/" className="font-bold text-white hover:underline">Home</a>
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 16-4 16 0" />
            </svg>
            <span>{adminName}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#35582a] text-white rounded shadow-lg min-w-[150px] z-10 border border-[#4b7735]">
              <p className="px-4 py-2 border-b border-[#4b7735]">{adminName}</p>
              <button
                className="w-full px-4 py-2 text-left hover:bg-[#4b7735]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* dashboard */}
      <div className="flex h-[calc(100vh-56px)]">
        {/* sidebar */}
        <aside className="w-52 bg-[#35582a] text-white pt-6 flex flex-col shadow">
          <button
            className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "createAdmin" ? "bg-[#4b7735]" : ""}`}
            onClick={() => setActiveTab("createAdmin")}
          >
            Create Admin
          </button>
          <button
            className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "subscribers" ? "bg-[#4b7735]" : ""}`}
            onClick={() => setActiveTab("subscribers")}
          >
            Subscribers
          </button>
        </aside>
        {/* main content  */}
        <main className="flex-1 p-8 bg-white">
          {!activeTab && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[#35582a]">Welcome to Dashboard</h2>
              <p className="text-gray-700">Select an option from the sidebar.</p>
            </div>
          )}
          {activeTab === "createAdmin" && (
            <form onSubmit={handleCreateAdmin}>
              <h2 className="text-2xl font-bold mb-4 text-[#35582a]">Create Admin</h2>
              <input
                type="text"
                placeholder="Admin Name"
                value={newAdminName}
                onChange={e => setNewAdminName(e.target.value)}
                className="border rounded px-4 py-2 mb-3 w-64 block text-[#35582a] bg-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newAdminEmail}
                onChange={e => setNewAdminEmail(e.target.value)}
                className="border rounded px-4 py-2 mb-3 w-64 block text-[#35582a] bg-white"
                required
              />
              <div className="relative w-64 mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={newAdminPassword}
                  onChange={e => setNewAdminPassword(e.target.value)}
                  className="border rounded px-4 py-2 w-full text-[#35582a] bg-white"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-[#35582a] hover:text-[#4b7735] focus:outline-none"
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
                disabled={creatingAdmin}
                className="bg-[#4b7735] text-white px-6 py-2 rounded hover:bg-[#35582a]"
              >
                {creatingAdmin ? "Creating..." : "Create"}
              </button>
            </form>
          )}
          {activeTab === "subscribers" && (
            <div className="text-[#35582a]">
              <h2 className="text-2xl font-bold mb-4 underline">Subscribers List</h2>
              {loadingSubs ? (
                <p>Loading...</p>
              ) : (
                <div className="overflow-auto max-h-[60vh]">
                  <table className="min-w-full border border-gray-300 bg-white">
                    <thead className="bg-[#4b7735] text-white sticky top-0">
                      <tr>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Subscribed At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((sub, idx) => (
                        <tr key={sub._id || idx} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b">{sub.email}</td>
                          <td className="py-2 px-4 border-b">
                            {new Date(sub.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}