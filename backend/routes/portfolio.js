const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (_, res) => {
  db.query("SELECT * FROM portfolio ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, description, image } = req.body;
  db.query("INSERT INTO portfolio (title, description, image) VALUES (?, ?, ?)",
    [title, description, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, title, description, image });
    }
  );
});

router.put("/:id", (req, res) => {
  const { title, description, image } = req.body;
  db.query("UPDATE portfolio SET title=?, description=?, image=? WHERE id=?",
    [title, description, image, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Portfolio updated" });
    }
  );
});

router.delete("/:id", (req, res) => {
  db.query("DELETE FROM portfolio WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Portfolio deleted" });
  });
});

module.exports = router;