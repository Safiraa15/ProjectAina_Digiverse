import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarDashboard from "./NavbarDashboard";
import { Briefcase, FolderKanban, Users } from "lucide-react";

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [services, setServices] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/team")
      .then((res) => res.json())
      .then((data) => setTeams(data));

    fetch("http://localhost:5002/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));

    fetch("http://localhost:5002/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-sky-700">
          Dashboard Overview
        </h1>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-2xl shadow flex items-center justify-between border-t-4 border-sky-500">
            <div>
              <h2 className="text-gray-600">Total Services</h2>
              <p className="text-2xl font-bold text-sky-700">
                {services.length}
              </p>
            </div>
            <Briefcase size={40} className="text-sky-500" />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow flex items-center justify-between border-t-4 border-green-500">
            <div>
              <h2 className="text-gray-600">Total Portfolio</h2>
              <p className="text-2xl font-bold text-green-600">
                {portfolios.length}
              </p>
            </div>
            <FolderKanban size={40} className="text-green-500" />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow flex items-center justify-between border-t-4 border-purple-500">
            <div>
              <h2 className="text-gray-600">Total Team</h2>
              <p className="text-2xl font-bold text-purple-600">
                {teams.length}
              </p>
            </div>
            <Users size={40} className="text-purple-500" />
          </div>
        </div>

        {/* DATA PREVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Services */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-sky-700">Services</h2>
              <Link to="/admin/services" className="text-sky-500 text-sm">
                Lihat Semua
              </Link>
            </div>
            <ul className="space-y-2">
              {services.slice(0, 3).map((s) => (
                <li
                  key={s.id}
                  className="p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <p className="font-bold">{s.title}</p>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-green-600">Portfolio</h2>
              <Link to="/admin/portfolio" className="text-green-500 text-sm">
                Lihat Semua
              </Link>
            </div>
            <ul className="space-y-2">
              {portfolios.slice(0, 3).map((p) => (
                <li
                  key={p.id}
                  className="p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <p className="font-bold">{p.title}</p>
                  <p className="text-sm text-gray-600">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-purple-600">Team</h2>
              <Link to="/admin/team" className="text-purple-500 text-sm">
                Lihat Semua
              </Link>
            </div>
            <ul className="space-y-2">
              {teams.slice(0, 3).map((t) => (
                <li
                  key={t.id}
                  className="p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;