import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../admin/Dashboard";
import Team from "../admin/Team";
import Services from "../admin/Services";
import Portfolio from "../admin/Portfolio";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;