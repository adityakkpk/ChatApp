import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // root route http://localhost:8000
  res.send("Hello, World!");
});

app.use("/api/auth", authRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
