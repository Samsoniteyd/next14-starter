import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const { slug } = params;

    try{

        connectDb()
        const post = await Post.find({slug})
        return NextResponse.json(post)

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
