import React from "react";
import DashboardArea from "../Components/Admin/Dashboard/DashboardArea";
import NevBarAdmin from "../Components/Admin/Dashboard/NevBarAdmin";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#4b7735]">
      <NevBarAdmin />
      <DashboardArea />
    </div>
  );
}
