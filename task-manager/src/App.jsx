import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import ApiDemo from "./pages/ApiDemo";
import { ThemeProvider } from "./context/ThemeContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tasks", to: "/tasks" },
  { label: "API Demo", to: "/api-demo" },
];

const footerLinks = [
  { label: "GitHub", to: "https://github.com/" },
  { label: "Docs", to: "#" },
];

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Layout navLinks={navLinks} footerLinks={footerLinks}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/api-demo" element={<ApiDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </ThemeProvider> 
  );
} 
