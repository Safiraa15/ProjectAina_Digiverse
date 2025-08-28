const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET ALL
router.get("/", (_, res) => {
  db.query("SELECT * FROM team ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// CREATE
router.post("/", (req, res) => {
  const { name, role, photo } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: "Name dan Role wajib diisi" });
  }

  db.query(
    "INSERT INTO team (name, role, photo) VALUES (?, ?, ?)",
    [name, role, photo || null],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, name, role, photo });
    }
  );
});

// UPDATE
router.put("/:id", (req, res) => {
  const { name, role, photo } = req.body;
  const { id } = req.params;

  if (!name || !role) {
    return res.status(400).json({ error: "Name dan Role wajib diisi" });
  }

  db.query(
    "UPDATE team SET name=?, role=?, photo=? WHERE id=?",
    [name, role, photo || null, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Team member tidak ditemukan" });
      }
      res.json({ message: "Team member berhasil diupdate" });
    }
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM team WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Team member tidak ditemukan" });
    }
    res.json({ message: "Team member berhasil dihapus" });
  });
});

module.exports = router;