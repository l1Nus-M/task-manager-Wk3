import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children, navLinks = [], footerLinks = [] }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar links={navLinks} />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer links={footerLinks} />
    </div>
  );
}
