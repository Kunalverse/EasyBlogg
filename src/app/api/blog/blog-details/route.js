import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const currentBlogId = searchParams.get("id");

    if (!currentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog Id not found",
      });
    }

    const blogDetail = await Blog.find({ _id: currentBlogId });

    if (blogDetail) {
      return NextResponse.json({
        success: true,
        data: blogDetail[0],
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to find blog",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
