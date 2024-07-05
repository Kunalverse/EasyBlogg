import mongoose from "mongoose";

const BloggSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamp: true }
);

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BloggSchema);

export default Blog;
