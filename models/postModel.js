import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: [
      true,
      "please provide the userId of the user who created this post",
    ],
  },
  body: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: [true, "Please provide the title of the post"],
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
