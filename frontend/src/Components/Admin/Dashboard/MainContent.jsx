import React, { useState, useEffect } from "react";
import API from "../../../api/axios";

export default function MainContent({ activeTab }) {
  // Create Admin states
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [creatingAdmin, setCreatingAdmin] = useState(false);

  // Subscribers states
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  // Fetch subscribers when needed
  useEffect(() => {
    if (activeTab === "subscribers") {
      setLoadingSubs(true);
      API.get("/admin/subscribers")
        .then((res) => {
          const sorted = res.data.subscribers.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setSubscribers(sorted);
        })
        .catch(() => {})
        .finally(() => setLoadingSubs(false));
    }
  }, [activeTab]);

  // Create Admin handler
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
    } finally {
      setCreatingAdmin(false);
    }
  };

  return (
    <main className="flex-1 p-8 bg-white">
      {!activeTab && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#35582a]">
            Welcome to Dashboard
          </h2>
          <p className="text-gray-700">Select an option from the sidebar.</p>
        </div>
      )}

      {activeTab === "createAdmin" && (
        <form onSubmit={handleCreateAdmin}>
          <h2 className="text-2xl font-bold mb-4 text-[#35582a]">
            Create Admin
          </h2>
          <input
            type="text"
            placeholder="Admin Name"
            value={newAdminName}
            onChange={(e) => setNewAdminName(e.target.value)}
            className="border rounded px-4 py-2 mb-3 w-64 block text-[#35582a] bg-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
            className="border rounded px-4 py-2 mb-3 w-64 block text-[#35582a] bg-white"
            required
          />
          <div className="relative w-64 mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={newAdminPassword}
              onChange={(e) => setNewAdminPassword(e.target.value)}
              className="border rounded px-4 py-2 w-full text-[#35582a] bg-white"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-[#35582a] hover:text-[#4b7735] focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              👁
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
          <h2 className="text-2xl font-bold mb-4 underline">
            Subscribers List
          </h2>
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
  );
}
