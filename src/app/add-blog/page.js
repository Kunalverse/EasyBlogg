"use client";

import { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
};

export default function AddBlog() {
  const [blogFormData, setBlogFormData] = useState(initialFormData);

  console.log(blogFormData);
  return (
    <div>
      <h1> Add a Blog </h1>
      <div>
        <label>Enter a title</label>
        <input name="title" placeholder="Enter a title" value={blogFormData["title"]} onChange={(e) => setBlogFormData({
            ...blogFormData,
            title: e.target.value
        })}/>
      </div>
      <div>
        <label>Enter a description</label>
        <textarea name="description" placeholder="Enter a description" value={blogFormData["description"]} onChange={(e) => setBlogFormData({
            ...blogFormData,
            description: e.target.value
        })}/>
      </div>
      <div>
        <button>Add Blog</button>
      </div>
    </div>
  );
}
