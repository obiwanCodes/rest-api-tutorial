import { v4 as uuidv4 } from "uuid";
import posts from "../posts.js";

let localposts = posts;

export const getPosts = (req, res) => {
  res.send(localposts);
};

export const getPostById = (req, res) => {
  const id = req.params.id;
  res.send(localposts.find((post) => post.id == id));
};

export const createPost = (req, res) => {
  const post = req.body;
  post.id = uuidv4();
  localposts.push(post);
  res.status(201);
  res.send(post);
};

export const updatePost = (req, res) => {
  const id = req.params.id;
  const reqpost = localposts.find((post) => post.id === id);
  const { title, body } = { ...req.body };
  if (!title !== null) reqpost["title"] = title;
  if (!body !== null) reqpost["body"] = body;
  console.log(reqpost);
  res.send(reqpost);
};

export const deletePost = (req, res) => {
  console.log("delete called");
  const id = req.params.id;
  console.log(id);
  localposts = localposts.filter((post) => post.id != id);
  res.status(204);
  res.send();
};
