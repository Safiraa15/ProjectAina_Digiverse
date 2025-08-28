import { useState } from "react";

const layananList = [
  {
    slug: "creative-design",
    title: "Desain Kreatif",
    desc: "Identitas visual dan desain yang memukau untuk brand Anda.",
    price: "Mulai dari Rp 15 juta",
    image: "/images/creative.jpg",
    fitur: ["Logo & Identitas Brand", "UI/UX Design", "Panduan Brand"],
    tools: ["Adobe Creative Suite", "Figma", "Sketch", "Principle"],
  },
  {
    slug: "web-development",
    title: "Pengembangan Website",
    desc: "Website dan aplikasi web yang powerful dan responsif.",
    price: "Mulai dari Rp 25 juta",
    image: "/images/web.jpg",
    fitur: ["Website Responsif", "CMS Kustom", "Aplikasi Web"],
    tools: ["React.js", "Node.js", "Next.js", "MongoDB"],
  },
  {
    slug: "digital-marketing",
    title: "Pemasaran Digital",
    desc: "Strategi pemasaran digital yang efektif dan terukur.",
    price: "Mulai dari Rp 10 juta/bulan",
    image: "/images/marketing.jpg",
    fitur: ["SEO", "Strategi Media Sosial", "Content Marketing"],
    tools: ["Google Analytics", "Meta Ads", "Ahrefs", "SEMrush"],
  },
  {
    slug: "content-creation",
    title: "Pembuatan Konten",
    desc: "Konten visual berkualitas tinggi untuk semua kebutuhan.",
    price: "Mulai dari Rp 8 juta",
    image: "/images/content.jpg",
    fitur: ["Fotografi Produk", "Produksi Video", "Copywriting"],
    tools: ["Premiere Pro", "After Effects", "Canva", "Photoshop"],
  },
  {
    slug: "mobile-solutions",
    title: "Solusi Mobile",
    desc: "Aplikasi mobile native dan cross-platform.",
    price: "Mulai dari Rp 40 juta",
    image: "/images/mobile.jpg",
    fitur: ["Aplikasi iOS/Android", "Cross-Platform App", "UI/UX Mobile"],
    tools: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analitik",
    desc: "Insight & rekomendasi cerdas untuk optimasi digital.",
    price: "Mulai dari Rp 12 juta",
    image: "/images/data.jpg",
    fitur: ["Business Intelligence", "Visualisasi Data", "Analisis Prediktif"],
    tools: ["Tableau", "Power BI", "Python", "Google BigQuery"],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-center mb-10 text-sky-900">
          Layanan <span className="text-sky-600">Digiverse</span>
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {layananList.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition relative p-4"
            >
              {/* Ornamen kecil */}
              <div className="absolute top-3 left-3 w-3 h-3 bg-sky-600 rounded-sm"></div>
              <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-500 rounded-sm"></div>

              {/* Foto */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl shadow mb-4"
              />

              {/* Ornamen lengkung */}
              <div className="relative flex justify-center mb-4">
                <div className="w-24 h-10 border-t-4 border-sky-500 rounded-t-full"></div>
              </div>

              {/* Judul & Harga */}
              <h2 className="text-lg font-bold text-sky-900">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              <p className="mt-2 font-semibold text-sky-600">{item.price}</p>

              {/* Tombol */}
              <button
                onClick={() =>
                  setExpanded(expanded === item.slug ? null : item.slug)
                }
                className="mt-4 w-full bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition"
              >
                {expanded === item.slug ? "Tutup Detail" : "Lihat Detail"}
              </button>

              {/* Expand Detail */}
              {expanded === item.slug && (
                <div className="mt-6 border-t pt-4">
                  <h3 className="font-semibold mb-2">Yang Anda Dapatkan:</h3>
                  <ul className="list-disc list-inside mb-4 text-gray-700">
                    {item.fitur.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold mb-2">Tools & Teknologi:</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}