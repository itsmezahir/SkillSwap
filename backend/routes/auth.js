const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");

// SIGN UP
router.post("/signUp", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, email, password)
       VALUES ($1, $2, $3, $4)
       RETURNING id, first_name, last_name, email`,
      [first_name, last_name, email, hashed]
    );

    res.json({ message: "Sign up success", user: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: "Email already exists" });
  }
});

// SIGN IN
router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

  if (user.rows.length === 0) {
    return res.status(400).json({ message: "Email not found" });
  }

  const valid = await bcrypt.compare(password, user.rows[0].password);

  if (!valid) {
    return res.status(400).json({ message: "Wrong password" });
  }

  res.json({ message: "Sign in success", user: user.rows[0] });
});

module.exports = router;
