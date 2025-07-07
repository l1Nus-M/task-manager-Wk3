import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ links = [], className = "", ...props }) {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "dark" ? "🌙" : "☀️";

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between ${className}`} {...props}>
      <div className="flex items-center gap-6">
        <span className="font-bold text-xl text-blue-600">Task.M</span>
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Theme switcher */}
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
    </nav>
  );
}
