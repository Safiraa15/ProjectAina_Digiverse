import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [active, setActive] = useState("hero");

  const menus = [
    { id: "about", label: "Tentang Kami" },
    { id: "services", label: "Layanan" },
    { id: "portfolio", label: "Portofolio" },
    { id: "team", label: "Tim" },
    { id: "contact", label: "Kontak" },
  ];

  // 🔥 auto detect section aktif
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...menus.map((m) => m.id)];
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-500 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo DigiVerse */}
        <a
          href="#hero"
          className={`flex items-center space-x-3 transition ${
            active === "hero" ? "text-yellow-300" : "text-white"
          }`}
        >
          <img src={logo} alt="DigiVerse Logo" className="w-12 h-12" />
          <span className="text-3xl font-bold font-['Exo_2']">DigiVerse</span>
        </a>

        {/* Menu Tengah */}
        <div className="flex-1 flex justify-center space-x-6 text-lg">
          {isHome ? (
            menus.map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                className={`cursor-pointer transition ${
                  active === menu.id ? "text-yellow-300" : "hover:text-sky-200"
                }`}
              >
                {menu.label}
              </a>
            ))
          ) : (
            <RouterLink to="/" className="hover:text-sky-200">
              Kembali ke Beranda
            </RouterLink>
          )}
        </div>

        {/* Tombol kanan */}
        {isHome && (
          <a
            href="#contact"
            className="bg-white text-sky-500 px-5 py-2 rounded-lg font-medium hover:bg-sky-100 transition"
          >
            Mulai Project
          </a>
        )}
      </div>
    </nav>
  );
}