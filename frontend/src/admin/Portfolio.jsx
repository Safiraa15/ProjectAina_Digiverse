// src/admin/Portfolio.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarDashboard from "./NavbarDashboard";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/portfolio");
      setPortfolio(res.data);
    } catch (err) {
      console.error("❌ Error fetch portfolio:", err.message);
    }
  };

  // Tambah / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (form.id) {
        // Update
        await axios.put(
         ` http://localhost:5002/api/portfolio/${form.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        // Tambah baru
        await axios.post("http://localhost:5002/api/portfolio", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({ id: null, title: "", description: "", image: null });
      fetchPortfolio();
    } catch (err) {
      console.error("❌ Error submit portfolio:", err.message);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setForm({
      id: item.id,
      title: item.title,
      description: item.description,
      image: null, // gambar opsional
    });
  };

  // Hapus
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/portfolio/${id}`);
      fetchPortfolio();
    } catch (err) {
      console.error("❌ Error delete portfolio:", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Kelola Portfolio</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Judul"
            className="border p-2 rounded w-1/3"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Deskripsi"
            className="border p-2 rounded w-1/2"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            type="file"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
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
            {portfolio.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {portfolio.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  Belum ada data portfolio
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;