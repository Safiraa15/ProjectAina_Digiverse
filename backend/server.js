const express = require("express");
const cors = require("cors");
const path = require("path");

// Init express
const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Database koneksi
const db = require("./config/db");

// Test koneksi langsung
db.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek DB:", err.message);
  } else {
    console.log("✅ Terkoneksi ke MySQL Database");
  }
});

// Serve folder uploads supaya foto bisa diakses
// contoh akses: http://localhost:5002/uploads/nama_file.jpg
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/team", require("./routes/team"));
app.use("/api/about", require("./routes/about"));
app.use("/api/services", require("./routes/services"));
app.use("/api/portfolio", require("./routes/portfolio"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/authRoutes"));

// Health check
app.get("/api/health", (_, res) => {
  res.json({ status: "ok", message: "🚀 Server running" });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});