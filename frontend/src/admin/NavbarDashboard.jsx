import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Users, Briefcase, Wrench } from "lucide-react"; // icon
import logo from "../assets/logo.png"; // pastikan path logo benar

const NavbarDashboard = () => {
  return (
    <nav className="bg-sky-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">DigiVerse Admin</h1>
        </div>

        {/* Menu */}
        <div className="flex space-x-6">
          <Link
            to="/admin/dashboard"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/team"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <Users className="h-5 w-5" />
            <span>Team</span>
          </Link>

          <Link
            to="/admin/portfolio"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <Briefcase className="h-5 w-5" />
            <span>Portfolio</span>
          </Link>

          <Link
            to="/admin/services"
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <Wrench className="h-5 w-5" />
            <span>Service</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;