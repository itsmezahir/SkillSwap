require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./controller/routes")

const app = express();
app.use(cors());
app.use(express.json()); // ini

// Testing endpoint
app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
