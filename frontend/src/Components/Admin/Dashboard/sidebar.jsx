import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-52 bg-[#35582a] text-white pt-6 flex flex-col shadow">
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${
          activeTab === "createAdmin" ? "bg-[#4b7735]" : ""
        }`}
        onClick={() => setActiveTab("createAdmin")}
      >
        Create Admin
      </button>
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${
          activeTab === "subscribers" ? "bg-[#4b7735]" : ""
        }`}
        onClick={() => setActiveTab("subscribers")}
      >
        Subscribers
      </button>

<button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${
          activeTab === "articles" ? "bg-[#4b7735]" : ""
        }`}
        onClick={() => setActiveTab("articles")}
      >
        Articles
      </button>

    </aside>
  );
}
