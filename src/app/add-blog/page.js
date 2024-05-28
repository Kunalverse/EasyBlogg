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
    const response = await fetch('https://easy-blogg-nzty.vercel.app/api/blog/add-new-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogFormData)
    })

    const result = await response.json()

    if(result?.success){
      setBlogFormData(initialFormData)
      router.push("/blog-list")
    }
  }

  return (
    <div class="flex min-h-screen flex-col">
      <h1 class="text-2xl font-bold p-10"> Add a Blog </h1>
        <div class="flex flex-col px-10 ">
          <label class="p-1 font-bold">Enter a title</label>
          <input class="p-1 border-black border-2" name="title" placeholder="Enter a title" value={blogFormData["title"]} onChange={(e) => setBlogFormData({
              ...blogFormData,
              title: e.target.value
          })}/>
          <label class="p-1 font-bold">Enter a description</label>
          <textarea class="p-1 border-black border-2" name="description" placeholder="Enter a description" value={blogFormData["description"]} onChange={(e) => setBlogFormData({
              ...blogFormData,
              description: e.target.value
          })}/>
        </div>
        <div>
          <button class="mx-10 mt-5 bg-black text-white p-3 rounded-md font-medium" onClick={handleAddBlog}>Add Blog</button>
        </div>
    </div>
  );
}
