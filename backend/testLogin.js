const bcrypt = require("bcrypt");
const mysql = require("mysql2/promise");

(async () => {
  // koneksi ke database
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",        // ganti sesuai MySQL kamu
    password: "Safira2004",        // ganti sesuai MySQL kamu
    database: "digiverse" // ganti sesuai DB kamu
  });

  const email = "admin@digiverse.id";
  const passwordInput = "admin123";

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      console.log("❌ User tidak ditemukan");
      process.exit();
    }

    const user = rows[0];
    console.log("✅ User ditemukan:", user.email);

    const match = await bcrypt.compare(passwordInput, user.password);
    console.log("Password cocok?", match);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await db.end();
  }
})();