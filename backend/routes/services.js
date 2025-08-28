const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET ALL
router.get("/", (_, res) => {
  db.query("SELECT * FROM services ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET ONE
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM services WHERE id=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
});

// CREATE
router.post("/", (req, res) => {
  const { title, description, price } = req.body;
  db.query("INSERT INTO services (title, description, price) VALUES (?, ?, ?)",
    [title, description, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, title, description, price });
    }
  );
});

// UPDATE
router.put("/:id", (req, res) => {
  const { title, description, price } = req.body;
  db.query("UPDATE services SET title=?, description=?, price=? WHERE id=?",
    [title, description, price, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Service updated" });
    }
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM services WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Service deleted" });
  });
});

module.exports = router;