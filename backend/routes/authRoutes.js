// authRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) {
      return res.status(401).json({ error: "User tidak ditemukan" });
    }

    const user = results[0];

    // 👉 cek password langsung (plain text)
    if (password !== user.password) {
      return res.status(401).json({ error: "Password salah" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  });
});

module.exports = router;