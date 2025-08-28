import React, { useEffect, useState } from "react";
import { FaRocket, FaTag, FaCreditCard, FaHeadphones, FaGlobe } from "react-icons/fa";

const iconMap = {
  rocket: <FaRocket className="text-2xl text-blue-600" />,
  tag: <FaTag className="text-2xl text-blue-600" />,
  "credit-card": <FaCreditCard className="text-2xl text-blue-600" />,
  headphones: <FaHeadphones className="text-2xl text-blue-600" />,
  globe: <FaGlobe className="text-2xl text-blue-600" />
};

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/api/about")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return null;

  return (
    <section id="about" className="py-16 bg-gray-50 scroll-mt-24">
      {/* Judul Tengah */}
      <h2 className="text-3xl font-bold text-center mb-12">Tentang Kami</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Logo Kiri */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="DigiVerse Logo"
            className="w-[260px] md:w-[300px] lg:w-[340px] object-contain"
          />
        </div>

        {/* Deskripsi + Visi Misi Kanan */}
        <div>
          <p className="text-gray-600 mb-6">{data.about?.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">✨ Visi</h3>
              <p className="text-gray-700">{data.about?.visi}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">🎯 Misi</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                {data.about?.misi?.split(";").map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan Kami */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Keunggulan Kami</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.advantages.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{iconMap[item.icon]}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;