import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add user
router.post("/", async (req, res) => {
  try {
    const { name, role } = req.body;
    const result = await pool.query(
      "INSERT INTO users (name, role) VALUES ($1, $2) RETURNING *",
      [name, role]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
