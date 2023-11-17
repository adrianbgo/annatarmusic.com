import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectMongoDB();
        const blogs = await Blog.find();
        return NextResponse.json({ blogs });
    } catch (error) {
        return NextResponse.json({ message: "Blogs not found" }, { status: 404 });
    }
}

export const POST = async (req: Request) => {
    try {
        const { title, content, tags } = await req.json();

        await connectMongoDB();

        await Blog.create({ title, content, tags });
        return NextResponse.json({ message: "Blog created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Blog not created" }, { status: 500 })
    }
}