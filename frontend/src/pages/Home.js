export default function Home() {
  return (
    <div>
      {/* Beranda */}
      <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-purple-700">Selamat Datang di DigiVerse</h1>
      </section>

      {/* Layanan */}
      <section id="services" className="h-screen flex items-center justify-center bg-green-100">
        <h1 className="text-3xl font-semibold">Layanan Kami</h1>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
      </section>

      {/* Tim */}
      <section id="team" className="h-screen flex items-center justify-center bg-yellow-100">
        <h1 className="text-3xl font-semibold">Tim Kami</h1>
      </section>

      {/* Kontak */}
      <section id="contact" className="h-screen flex items-center justify-center bg-pink-100">
        <h1 className="text-3xl font-semibold">Hubungi Kami</h1>
      </section>
    </div>
  );
}