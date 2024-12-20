import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./routes/userRoutes.js";

dotenv.config();

const DB_URI = process.env.DB_URI;

const app = express();
app.use(express.json());

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

// app.use("api/users", userRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
