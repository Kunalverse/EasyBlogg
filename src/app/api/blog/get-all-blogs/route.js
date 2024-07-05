import connectToDB from "@/database"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';
export async function GET(){
    try {
        await connectToDB();

        const blogData = await Blog.find({});
        console.log("Here => " + blogData)

        if (blogData && blogData.length) {
            return NextResponse.json({
                success: true,
                data: blogData
            }, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to get blogs"
            }, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
        }
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
    }
}
