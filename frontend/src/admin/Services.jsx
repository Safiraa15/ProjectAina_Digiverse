// src/admin/Services.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarDashboard from "./NavbarDashboard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ id: null, title: "", description: "" });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/services");
      setServices(res.data);
    } catch (err) {
      console.error("❌ Error fetch services:", err.message);
    }
  };

  // Tambah / Update Service
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        // Update
        await axios.put(`http://localhost:5002/api/services/${form.id}`, {
          title: form.title,
          description: form.description,
        });
      } else {
        // Tambah baru
        await axios.post("http://localhost:5002/api/services", {
          title: form.title,
          description: form.description,
        });
      }
      setForm({ id: null, title: "", description: "" });
      fetchServices();
    } catch (err) {
      console.error("❌ Error submit service:", err.message);
    }
  };

  // Edit service
  const handleEdit = (service) => {
    setForm({ id: service.id, title: service.title, description: service.description });
  };

  // Hapus service
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error("❌ Error delete service:", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Kelola Services</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Judul Service"
            className="border p-2 rounded w-1/3"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Deskripsi"
            className="border p-2 rounded w-1/2"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {form.id ? "Update" : "Tambah"}
          </button>
        </form>

        {/* Table */}
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Judul</th>
              <th className="p-3">Deskripsi</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t">
                <td className="p-3">{service.title}</td>
                <td className="p-3">{service.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  Belum ada data services
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;