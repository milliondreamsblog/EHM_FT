// src/components/ui/Card.jsx
import React from "react";

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  bg = "bg-white",
  border = "border border-slate-200",
  padding = "p-6 sm:p-8 lg:p-10",
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl shadow-lg flex flex-col items-center text-center 
        transition-all duration-300 ease-in-out
        ${bg} ${border} ${padding} ${hoverEffect ? "group" : ""} ${className}
      `}
    >
      {children}
    </div>
  );
}
