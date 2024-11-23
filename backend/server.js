import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  // root route http://localhost:8000
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server listening on port ${PORT}`);
});
