const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET About + Advantages
router.get("/", (req, res) => {
  // Ambil data about
  db.query("SELECT * FROM about LIMIT 1", (err, aboutResult) => {
    if (err) return res.status(500).json({ error: err.message });

    const about = aboutResult[0] || {};

    // Ambil data advantages
    db.query("SELECT * FROM advantages ORDER BY id ASC", (err2, advResult) => {
      if (err2) return res.status(500).json({ error: err2.message });

      res.json({
        about: {
          description: about.description || "",
          visi: about.visi || "",
          misi: about.misi || "",
        },
        advantages: advResult || [],
      });
    });
  });
});

module.exports = router;