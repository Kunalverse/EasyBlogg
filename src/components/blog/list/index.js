"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function BlogListComponent({getAllBlogs}){

    const router = useRouter()
    
    useEffect(()=>{
        router.refresh()
    },[])

    async function handleDeleteButton(blogId){
        const response = await fetch(`/api/blog/delete-blog?id=${blogId}`,{
            method: "DELETE",
        })

        const data = await response.json()

        if(data?.success){
            router.refresh()
        }
    }

    return <div>
        {
            getAllBlogs && getAllBlogs.length > 0 ? 
                getAllBlogs.map(blog => <div key= {blog._id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <button onClick={() => handleDeleteButton(blog._id)}>Delete</button>
                    <button onClick={() => router.push(`/blog-list/${blog._id}`)}>View Blog Details</button>
                </div>)
            : <h1> No Blogs yet</h1>
        }
    </div>
        
}