import React, { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/team")
      .then((res) => setTeam(res.data))
      .catch((err) => console.error("Gagal fetch team:", err));
  }, []);

  // fungsi untuk handle gambar (fix path db ada /uploads/..)
  const getImageUrl = (img) => {
    if (!img) return "/default-avatar.png"; // fallback kalau kosong
    if (img.startsWith("http")) return img; // kalau udah full url
    return `http://localhost:5002${img.startsWith("/") ? img : "/" + img}`;
  };

  return (
    <section id="team" className="py-16 bg-sky-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-700 text-center mb-12">
          Tim Kami
        </h2>

        {team.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada data tim.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
              >
                {/* FOTO TEAM */}
                <img
                  src={getImageUrl(member.image)}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-sky-300"
                />

                {/* NAMA */}
                <h3 className="mt-4 text-xl font-semibold text-sky-800">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-sky-600">{member.role}</p>

                {/* PENGALAMAN */}
                <p className="text-gray-500 text-sm mt-2">
                  {member.experience} pengalaman
                </p>

                {/* PROJECT */}
                <p className="text-gray-400 text-sm">
                  {member.projects}+ project
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;