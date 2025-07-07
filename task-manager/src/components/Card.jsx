import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
