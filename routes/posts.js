import express from "express";
import {
  getPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.get("/:id", getPostById);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
