require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

// Connect ke PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Testing endpoint
app.get("/", (req, res) => {
  res.send("Backend berjalan.");
});

// REGISTER
app.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1,$2,$3,$4) RETURNING id",
      [first_name, last_name, email, password]
    );

    res.json({ success: true, userId: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (result.rows.length === 0) {
    return res.status(401).json({ message: "Email / Password salah" });
  }

  res.json({ message: "Login berhasil", user: result.rows[0] });
});

app.listen(5000, () => console.log("Server running on port 5000"));
