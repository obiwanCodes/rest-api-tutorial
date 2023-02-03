import express from "express";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

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
