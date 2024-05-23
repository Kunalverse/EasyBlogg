import connectToDB from "@/database"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"


export async function GET(){
    try{
        await connectToDB()

        const blogData = await Blog.find({})

        if(blogData && blogData.length){
            return NextResponse.json({
                success: true,
                data: blogData
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Failed to get blogs"
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