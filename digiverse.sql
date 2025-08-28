

CREATE DATABASE IF NOT EXISTS digiverse;
USE digiverse;

-- ====================
-- Table: team
-- ====================
CREATE TABLE IF NOT EXISTS team (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(100),
  experience VARCHAR(50),
  projects INT,
  image VARCHAR(255)
);

INSERT INTO team (name, role, experience, projects, image) VALUES
("Julian Kaisar", "Creative Director", "10 tahun", 150, "/uploads/team1.jpg"),
("Mahalini Raharja", "UI/UX Designer", "6 tahun", 120, "/uploads/team2.jpg"),
("Rizky Febian", "Fullstack Developer", "9 tahun", 200, "/uploads/team3.jpg"),
("Risa Saraswati", "Digital Marketing", "7 tahun", 130, "/uploads/team4.jpg"),
("Muhammad Tulus Rusydi", "Data Analyst", "8 tahun", 80, "/uploads/team5.jpg"),
("Pradikta Wicaksono", "Content Creator", "5 tahun", 90, "/uploads/team6.jpg");

-- ====================
-- Table: services
-- ====================
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  price VARCHAR(50)
);

INSERT INTO services (title, description, price) VALUES
("Creative Design", "Menciptakan identitas visual brand inovatif", "Mulai dari Rp 15 Juta"),
("Web Development", "Website modern & responsif", "Mulai dari Rp 20 Juta"),
("Digital Marketing", "Strategi marketing digital efektif", "Mulai dari Rp 10 Juta"),
("Content Creation", "Konten kreatif untuk brand", "Mulai dari Rp 5 Juta"),
("Mobile Solutions", "Aplikasi mobile modern", "Mulai dari Rp 25 Juta"),
("Data & Analytics", "Insight berbasis data", "Mulai dari Rp 12 Juta");

-- ====================
-- Table: portfolio
-- ====================
CREATE TABLE IF NOT EXISTS portfolio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  category VARCHAR(50),
  description TEXT,
  image VARCHAR(255)
);

INSERT INTO portfolio (title, category, description, image) VALUES
("Fintech Mobile App", "Mobile App", "Aplikasi mobile keuangan digital", "/images/portfolio.jpg"),
("Eco Fashion Brand", "Brand Design", "Branding fashion berkelanjutan", "/images/portfolio1.jpg"),
("E-learning Platform", "Web Development", "Platform belajar online interaktif", "/images/portfolio2.jpg"),
("Restaurant Campaign", "Digital Marketing", "Kampanye iklan digital restoran", "/images/portfolio3.jpg"),
("Corporate Website", "Web Development", "Website resmi perusahaan", "/images/portfolio4.jpg"),
("Luxury Product Photography", "Content Creation", "Fotografi produk eksklusif", "/images/portfolio5.jpg");

-- ====================
-- Table: contact
-- ====================
CREATE TABLE IF NOT EXISTS contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(50),
  message TEXT
);

-- ====================
-- Table: about
-- ====================
CREATE TABLE about (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(255),
  description TEXT,
  visi TEXT,
  misi TEXT
);

INSERT INTO about (company_name, description, visi, misi) VALUES
(
  "Digiverse",
  "Digiverse adalah mitra terpercaya dalam memberikan solusi digital terbaik untuk membantu transformasi bisnis di seluruh Indonesia.",
  "Menjadi creative partner yang mengubah ide menjadi pengalaman digital yang berkesan.",
  "Merancang strategi digital yang relevan dan berdampak.;
   Menghadirkan konten kreatif yang menghubungkan brand dengan audiens.;
   Menggabungkan kreativitas, teknologi, dan storytelling untuk menciptakan solusi inovatif.;
   Membangun brand experience yang autentik, engaging, dan berkelanjutan."
);

-- ====================
-- Table: advantages
-- ====================
CREATE TABLE advantages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  icon VARCHAR(50) 
);

INSERT INTO advantages (title, description, icon) VALUES
("Cepat & Profesional", "Pengembangan website sesuai kebutuhan dalam waktu yang efisien.", "rocket"),
("Harga Transparan", "Solusi terbaik dengan harga yang kompetitif.", "tag"),
("Bayar Setelah Jadi", "Pembayaran hanya dilakukan setelah website selesai dan siap digunakan.", "credit-card"),
("Dukungan Pelanggan 24/7", "Selalu siap membantu Anda kapan pun dibutuhkan.", "headphones"),
("Cakupan Nasional", "Melayani pelanggan dari berbagai kota besar seperti Jakarta, Surabaya, Bandung, hingga Bali dan Medan.", "globe");




-- Bikin tabel users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'admin'
);

-- Insert 2 akun admin (password plain text, bukan hash)
INSERT INTO users (name, email, password, role) VALUES
('Admin 1', 'admin@digiverse.id', 'admin123', 'admin'),
('Admin 2', 'superadmin@digiverse.id', 'admin456', 'admin');
