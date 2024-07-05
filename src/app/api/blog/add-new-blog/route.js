import connectToDB from "@/database"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';
export async function POST(req){
    try{
        await connectToDB()

        const blogData  = await req.json()

        const newBlog = await Blog.create(blogData)

        if(newBlog){
            return NextResponse.json({
                success: true,
                message: "New blog created"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Failed to create blog"
            })
        }

    }catch(e){
        console.log(e)

        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })
    }
}