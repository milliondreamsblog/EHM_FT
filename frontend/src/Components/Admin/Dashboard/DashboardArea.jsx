import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainContent from "./MainContent";

export default function DashboardArea() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="flex h-[calc(100vh-56px)]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
    </div>
  );
}
