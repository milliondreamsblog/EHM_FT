import React, { useState, useEffect, useRef } from "react";
import API from "../../../api/axios";
import { useNavigate } from "react-router-dom";

export default function NevBarAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminName, setAdminName] = useState("Admin");

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch admin info
  useEffect(() => {
    API.get("/admin/me")
      .then((res) => {
        console.log("Admin info:", res.data);
        setAdminName(res.data.AdminName || "Admin");
      })
      .catch((err) => {
        console.error("Admin info error:", err);
        setAdminName("Admin");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-[#35582a] px-6 py-3 text-white shadow">
      <a href="/" className="font-bold text-white hover:underline">
        Home
      </a>
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 16-4 16 0" />
          </svg>
          <span>{adminName}</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
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
  );
}
