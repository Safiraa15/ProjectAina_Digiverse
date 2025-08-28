const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({error:"name, email, message required"});
  db.query("INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [name, email, phone || null, message],
    (err, result) => {
      if (err) return res.status(500).json({error: err.message});
      res.json({ success: true, id: result.insertId });
    });
});

module.exports = router;
