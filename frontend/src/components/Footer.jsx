import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-r from-sky-500 to-sky-700 text-white py-12">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
          🌐 DigiVerse
        </h2>
        <p className="mt-4 text-sm text-sky-100 leading-relaxed">
          Digital agency yang siap bantu bisnismu tumbuh 🚀 dengan solusi kreatif,
          teknologi mutakhir, dan strategi yang asik tapi serius!
        </p>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          🎨 Layanan
        </h3>
        <ul className="space-y-2 text-sm text-sky-100">
          <li>✨ Creative Design & Branding</li>
          <li>💻 Web & Mobile Development</li>
          <li>📢 Digital Marketing</li>
          <li>🎥 Content Creation</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          🏢 Perusahaan
        </h3>
        <ul className="space-y-2 text-sm text-sky-100">
          <li>ℹ️ Tentang DigiVerse</li>
          <li>👨‍💻 Tim Expert</li>
          <li>✍️ Blog & Artikel</li>
          <li>🚪 Karir</li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="container mx-auto px-6 mt-10 border-t border-sky-400 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-sky-100">
      <p>
        © {new Date().getFullYear()} DigiVerse. Semua hak cipta dilindungi 🔒 |{" "}
        <Link to="/admin" className="text-gray-400 hover:text-white">
          Admin
        </Link>
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;