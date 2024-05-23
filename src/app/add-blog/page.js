"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
};

export default function AddBlog() {
  const [blogFormData, setBlogFormData] = useState(initialFormData);

  const router = useRouter()

  async function handleAddBlog(){
    const response = await fetch('/api/blog/add-new-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogFormData)
    })

    const result = await response.json()

    console.log(result)

    if(result?.success){
      setBlogFormData(initialFormData)
      router.push("/blog-list")
    }
  }

  // console.log(blogFormData);
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
        <button onClick={handleAddBlog}>Add Blog</button>
      </div>
    </div>
  );
}
