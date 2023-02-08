import Lowdb from "lowdb";
import { v4 as uuidv4 } from "uuid";
// import posts from "../posts.js";
// import { db } from "../index.js";
import Post from "../models/postModel.js";
export const getPosts = async (req, res) => {
  // ***with local posts array***

  // res.send(localposts);
  // ***lowdb implementation***
  // res.send(db.get("posts"));

  // ***mongodb implementation ***
  const posts = await Post.find();
  // const posts = await Post.find({ title: req.queryParams.title });
  res.send(posts);
};

export const getPostById = async (req, res) => {
  const id = req.params.id;

  // ***lowdb implementation***
  // res.send(
  //   db
  //     .get("posts")
  //     .find((post) => post.id == id)
  //     .value()
  // );
  // ***mongodb implementation ***
  const post = await Post.find({ _id: id });
  res.send(post);
};

export const createPost = async (req, res) => {
  if (req.body.userId === undefined || req.body.title === undefined) {
    res.status(400);
    res.send("Can't create a post without userId");
  } else {
    // ***lowdb implementation***

    // post.id = uuidv4();
    // db.get("posts").push(post).write();
    // res.status(201);
    // res.send(post);

    // ***mongodb implementation ***

    const post = await Post.create(req.body);
    res.status(201).json(post);
  }
};

export const updatePost = async (req, res) => {
  // const id = req.params.id;
  // const { title, body } = { ...req.body };

  // ***lowdb implementation***

  // if (body !== undefined && title !== undefined) {
  //   db.get("posts")
  //     .find((post) => post.id === id)
  //     .assign({
  //       body: body,
  //       title: title,
  //     })
  //     .write();
  // }
  // if (title === undefined && body !== undefined) {
  //   db.get("posts")
  //     .find((post) => post.id === id)
  //     .assign({
  //       body: body,
  //     })
  //     .write();
  // }
  // if (body === undefined && title !== undefined) {
  //   db.get("posts")
  //     .find((post) => post.id === id)
  //     .assign({
  //       title: title,
  //     })
  //     .write();
  // }

  // res.send(db.get("posts").find((post) => post.id === id));

  // ***mongodb implementation ***

  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  // console.log("delete called");
  // const id = req.params.id;
  // db.get("posts").remove({ id: id }).write();
  // res.status(204);
  // res.send();

  // *** mongodb implementation ***

  const post = Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }
  await Post.deleteOne({ _id: req.params.id });
  res.status(204).json({ message: "Post was deleted" });
};
