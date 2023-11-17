import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        await connectMongoDB();
        const post = await Blog.findById(id);
        return NextResponse.json({ post });
    } catch (error) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
}

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        const { title, content, tags } = await req.json();
        await Blog.findByIdAndUpdate(id, { title, content, tags });
        return NextResponse.json({ message: "Blog updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id;
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
}