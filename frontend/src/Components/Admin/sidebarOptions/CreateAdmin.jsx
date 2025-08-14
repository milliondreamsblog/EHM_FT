import React, { useState } from "react";
import API from "../../../api/axios";

export default function CreateAdmin() {
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [creatingAdmin, setCreatingAdmin] = useState(false);

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
    <form onSubmit={handleCreateAdmin}>
      <h2 className="text-2xl font-bold mb-4 text-[#35582a] underline">
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
          className="absolute right-2 top-2 text-[#35582a] hover:text-[#4b7735]"
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
  );
}
