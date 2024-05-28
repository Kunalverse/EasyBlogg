"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function BlogListComponent({getAllBlogs}){

    const router = useRouter()
    
    useEffect(()=>{
        router.refresh()
    },[])

    async function handleDeleteButton(blogId){
        const response = await fetch(`https://easy-blogg-nzty.vercel.app/api/blog/delete-blog?id=${blogId}`,{
            method: "DELETE",
        })

        const data = await response.json()

        console.log("================================================")
        console.log("Data: " + data)

        if(data?.success){
            router.refresh()
        }
    }

    function truncateText(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }

    return <div class="flex flex-row min-h-screen">
        {
            getAllBlogs && getAllBlogs.length > 0 ? 
                getAllBlogs.map(blog => <div class="flex flex-col border-2 border-black rounded mx-3 my-3 h-60" key= {blog._id}>
                    <h3 class="m-3 font-medium text-lg">{blog.title}</h3>
                    <p class="mx-3 text-sm">{truncateText(blog.description, 3)}</p>
                    <button class="mx-3 mt-2 bg-black text-white p-2 rounded-md font-medium" onClick={() => handleDeleteButton(blog._id)}>Delete</button>
                    <button class="mx-3 my-2 bg-black text-white p-2 rounded-md font-medium" onClick={() => router.push(`/blog-list/${blog._id}`)}>View Blog Details</button>
                </div>)
            : <h1> No Blogs yet</h1>
        }
    </div>
        
}