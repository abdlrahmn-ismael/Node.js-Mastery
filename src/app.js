// src/index.js
import express from "express";
import connectDB from "./../config/db.js";
import authRoutes from "../src/routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
