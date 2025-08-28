import React from "react";
import heroImage from "../assets/hero.jpg"; 

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-sky-100 via-sky-50 to-white pt-32 pb-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Bagian Kiri - Text */}
        <div>
          <span className="inline-block bg-sky-200 text-sky-700 px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            Creative Digital Solutions
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-sky-800">
            Masuki Dunia <span className="text-sky-600">Digital</span> <br />
            Yang Tak Terbatas
          </h1>

          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-lg">
            DigiVerse menghadirkan solusi digital inovatif yang membantu bisnis
            dan brand Anda bertumbuh melalui strategi kreatif, teknologi mutakhir, 
            dan pendekatan yang berorientasi hasil.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-sky-600 text-white rounded-xl font-semibold shadow-md hover:bg-sky-700 transition"
            >
              Mulai dengan DigiVerse
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-3 border border-sky-300 text-sky-700 rounded-xl font-semibold hover:bg-sky-100 transition"
            >
              Lihat Layanan
            </button>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <img
            src={heroImage}
            alt="Tim DigiVerse"
            className="relative rounded-2xl shadow-2xl w-full max-w-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;