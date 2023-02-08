import express from "express";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import lowDb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
// export const db = new lowDb(new FileSync("db.json"));
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to JSON placeholder API!!");
  console.log("Yayyyy!!!");
});

app.use("/posts", postRoutes);
// app.use("/users", postRoutes);

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
