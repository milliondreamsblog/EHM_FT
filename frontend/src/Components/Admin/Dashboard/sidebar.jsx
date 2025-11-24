import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-52 bg-[#35582a] text-white pt-6 flex flex-col shadow">
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "createAdmin" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("createAdmin")}
      >
        Create Admin
      </button>
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "subscribers" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("subscribers")}
      >
        Subscribers
      </button>
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "articles" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("articles")}
      >
        Articles
      </button>

      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "blogManage" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("blogManage")}
      >
        Manage Blogs
      </button>
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "caseStudiesManage" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("caseStudiesManage")}
      >
        Manage Case Studies
      </button>
      <button
        className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "footprintManage" ? "bg-[#4b7735]" : ""
          }`}
        onClick={() => setActiveTab("footprintManage")}
      >
        Manage Footprints
      </button>
       <button
          className={`px-6 py-3 text-left hover:bg-[#4b7735] rounded transition font-medium ${activeTab === "contactUser" ? "bg-[#4b7735]" : ""
            }`}
          onClick={() => setActiveTab("contactUser")}
        >
          Contact User
      </button>
    </aside>
  );
}
