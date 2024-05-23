import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function DELETE(req){
    try{
        await connectToDB()

        const {searchParams} = new URL(req.url)
        const currentBlogId = searchParams.get("id")

        if(!currentBlogId){
            return NextResponse.json({
                success: false,
                message: "Blog Id required"
            })
        }

        const deleteBlog = await Blog.findByIdAndDelete(currentBlogId)

        if(deleteBlog){
            return NextResponse.json({
                success: true,
                message: "Blog deleted successfully"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Failed to delete blog"
            })
        }

    }catch(e){
        console.log(e);

        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })
    }
}