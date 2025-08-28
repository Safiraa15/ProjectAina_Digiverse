import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ======= Public Components =======
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

// ======= Admin Components =======
import AdminLogin from "./admin/AdminLogin";
import NavbarDashboard from "./admin/NavbarDashboard";
import Dashboard from "./admin/Dashboard";
import TeamAdmin from "./admin/Team";
import ServicesAdmin from "./admin/Services";
import PortfolioAdmin from "./admin/Portfolio";

// Fonts
import "@fontsource/exo-2/700.css"; // Bold 700
import "@fontsource/exo-2/400.css"; // Regular 400

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* ======= Halaman Utama ======= */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Team />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* ======= Admin Login ======= */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* ======= Admin Dashboard ======= */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/team" element={<TeamAdmin />} />
          <Route path="/admin/services" element={<ServicesAdmin />} />
          <Route path="/admin/portfolio" element={<PortfolioAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}