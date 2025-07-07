import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ links = [], className = "", ...props }) {
  return (
    <footer className={`bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 px-4 mt-8 ${className}`} {...props}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex gap-4 mb-2 md:mb-0">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm">&copy; {new Date().getFullYear()} Task.M. All rights reserved.</div>
      </div>
    </footer>
  );
}
