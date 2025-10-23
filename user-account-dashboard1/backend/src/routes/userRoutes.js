const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing fields" });
  const hashed = await bcrypt.hash(password, 10);
  await pool.query(
    "INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)",
    [email, firstName, lastName, hashed]
  );
  res.json({ message: "User created" });
});

router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT id, email, first_name, last_name FROM users");
  res.json(rows);
});

router.put("/:id", async (req, res) => {
  const { firstName, lastName } = req.body;
  await pool.query(
    "UPDATE users SET first_name=?, last_name=? WHERE id=?",
    [firstName, lastName, req.params.id]
  );
  res.json({ message: "User updated" });
});

router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM users WHERE id=?", [req.params.id]);
  res.json({ message: "User deleted" });
});

module.exports = router;