import React from "react";

const VARIANT_STYLES = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded transition font-medium focus:outline-none ${VARIANT_STYLES[variant] || VARIANT_STYLES.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
