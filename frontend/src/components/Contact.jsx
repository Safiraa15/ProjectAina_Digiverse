import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6285150842495"; // Nomor WA kamu
    const text = `Halo, saya ${form.name} (Email: ${form.email})%0A%0A${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-sky-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">
          Hubungi Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Informasi Kontak */}
          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg border border-sky-200">
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">
              Info Kontak
            </h3>
            <p className="mb-3">📍 Alamat: Blok Pasantren, Desa Batujajar Barat</p>
            <p className="mb-3">📞 Telepon: 0851-5084-2495</p>
            <p className="mb-3">✉️ Email: info@digiverse.com</p>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Blok%20Pasantren%20Batujajar%20Barat&hl=id&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi DigiVerse"
              ></iframe>
            </div>

            {/* Tombol buka link maps */}
            <a
              href="https://maps.app.goo.gl/XESknMT7UmoSnbAaA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              Lihat di Google Maps
            </a>
          </div>

          {/* Form Kontak */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl border border-sky-200"
          >
            <div className="mb-5">
              <label className="block mb-2 font-medium text-sky-700">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama"
                className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-sky-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-sky-700">Pesan</label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tulis pesanmu..."
                className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition font-semibold"
            >
              Hubungi kami via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}