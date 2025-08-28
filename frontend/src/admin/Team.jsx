// src/admin/Team.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarDashboard from "./NavbarDashboard"; // ✅ tambahin ini

const Team = () => {
  const [team, setTeam] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    role: "",
    experience: "",
    projects: "",
    photo: null,
  });

  // Ambil data dari backend
  const fetchTeam = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/team");
      setTeam(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  // Submit data baru
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(`http://localhost:5002/api/team/${form.id}`, {
          name: form.name,
          role: form.role,
          experience: form.experience,
          projects: form.projects,
        });
      } else {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("role", form.role);
        formData.append("experience", form.experience);
        formData.append("projects", form.projects);
        if (form.photo) formData.append("photo", form.photo);

        await axios.post("http://localhost:5002/api/team", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setForm({ id: null, name: "", role: "", experience: "", projects: "", photo: null });
      fetchTeam();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit data
  const handleEdit = (member) => {
    setForm({
      id: member.id,
      name: member.name,
      role: member.role,
      experience: member.experience || "",
      projects: member.projects || "",
      photo: null,
    });
  };

  // Hapus data
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/team/${id}`);
      fetchTeam();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar Admin */}
      <NavbarDashboard />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Kelola Team</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6">
          <input
            type="text"
            placeholder="Nama"
            className="border p-2 rounded w-1/4"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Posisi"
            className="border p-2 rounded w-1/4"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Experience"
            className="border p-2 rounded w-1/4"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
          />
          <input
            type="text"
            placeholder="Projects"
            className="border p-2 rounded w-1/4"
            value={form.projects}
            onChange={(e) => setForm({ ...form, projects: e.target.value })}
          />

          {!form.id && (
            <input
              type="file"
              onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
            />
          )}

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {form.id ? "Update" : "Tambah"}
          </button>
        </form>

        {/* Table */}
        <table className="w-full border-collapse border bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">Nama</th>
              <th className="p-3 border">Posisi</th>
              <th className="p-3 border">Experience</th>
              <th className="p-3 border">Projects</th>
              <th className="p-3 border">Foto</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.id} className="border-t">
                <td className="p-3 border">{member.name}</td>
                <td className="p-3 border">{member.role}</td>
                <td className="p-3 border">{member.experience}</td>
                <td className="p-3 border">{member.projects}</td>
                <td className="p-3 border">
                  {member.photo && (
                    <img
                      src={`http://localhost:5002/uploads/${member.photo}`}
                      alt={member.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleEdit(member)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;