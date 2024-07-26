import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {


    try{

        connectDb()
        const posts = await Post.find()
        return NextResponse.json(posts)

    }catch(error) {
        console.log(error);
        throw new Error ("failed to fetch posts");

    }
};

export const DELETE = async (request, {params}) => {
    const { slug } = params;


    try{

        connectDb()
        await Post.deleteOne({slug});
        return NextResponse.json("Post Deleted");

    }catch(error) {
        console.log(error);
        throw new Error ("failed to fetch posts");

    }
}