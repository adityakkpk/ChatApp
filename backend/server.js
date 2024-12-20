import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleware/protectRoute.js";
import { httpServer, app } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);
app.use("/api/users", protectRoute, userRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.get("/", (req, res) => {
  // root route http://localhost:8000
  res.send("Hello, World!");
});

httpServer.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server listening on port ${PORT}`);
});
