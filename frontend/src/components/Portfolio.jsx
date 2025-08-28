import React, { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      category: "Mobile App",
      image: "/images/portfolio1.jpg",
    },
     {
      id: 2,
      title: "Smart Healt Tracker",
      category: "Mobile App",
      image: "/images/portfolio.jpg",
    },
    {
      id: 3,
      title: "Eco Fashion Brand",
      category: "Brand Design",
      image: "/images/portfolio2.jpg",
    },
    {
      id: 4,
      title: "E-learning Platform",
      category: "Web Development",
      image: "/images/portfolio3.jpg",
    },
    {
      id: 5,
      title: "Restaurant Chain Campaign",
      category: "Digital Marketing",
      image: "/images/portfolio4.jpg",
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      category: "Web Development",
      image: "/images/portfolio5.jpg",
    },
    {
      id: 7,
      title: "Luxury Product Photography",
      category: "Content Creation",
      image: "/images/portfolio6.jpg",
    },
    {
      id: 8,
      title: "Social Media Visuals",
      category: "Content Creation",
      image: "/images/portfolio7.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Semua Proyek");
  const categories = [...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "Semua Proyek"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center mb-4 text-sky-900">
          Portofolio <span className="text-sky-600">Kami</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Jelajahi karya-karya terbaik kami yang mengubah visi digital klien
          menjadi kenyataan.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["Semua Proyek", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-sky-600 text-white"
                  : "bg-gray-100 hover:bg-sky-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg p-4 text-center relative overflow-hidden"
            >
              {/* Gambar lebih panjang */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>

              {/* Ornamen lengkung bawah */}
              <div className="absolute bottom-0 left-0 w-28 h-28 border-l-4 border-b-4 border-sky-400 rounded-bl-full"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 border-r-4 border-b-4 border-sky-600 rounded-br-full"></div>

              {/* Aksen kotak kiri-kanan */}
              <div className="absolute top-5 left-3 w-3 h-3 bg-sky-600 rounded-sm"></div>
              <div className="absolute top-5 right-3 w-3 h-3 bg-sky-400 rounded-sm"></div>

              {/* Nama project */}
              <h3 className="text-base font-bold mt-4 text-sky-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;