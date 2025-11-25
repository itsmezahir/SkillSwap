require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./controller/auth/routes")
const profileRoutes = require("./controller/profile/routes")

const app = express();
app.use(cors());
app.use(express.json()); 

// Testing endpoint
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
