const express = require("express");
const serverless = require("serverless-http");
const pool = require("./db");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "User Account API running 🚀" });
});

app.post("/users", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)",
      [email, firstName, lastName, hash]
    );
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, email, first_name, last_name FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  try {
    await pool.query(
      "UPDATE users SET first_name=?, last_name=? WHERE id=?",
      [firstName, lastName, id]
    );
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: "Error updating user" });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM users WHERE id=?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting user" });
  }
});

module.exports.handler = serverless(app);