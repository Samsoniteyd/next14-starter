// Temporary data 

import { Post, User } from "./models";
import { connectDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


// const users = [
//     {id:1, name:'john'},
//     {ide:2, name: 'jane'},
// ]


// const posts = [
//     {id:1, title:'post 1', body:'body', userId:1},
//     {id:2, title:'post 2', body:'body', userId:2},
//     {id:3, title:'post 3', body:'body', userId:3},
//     {id:4, title:'post 4', body:'body', userId:4},


// ]






export const getPosts = async () => {

    try{
        connectDb();
        const posts = await Post.find();
        return posts;
    } catch(err) {

        console.log(err)
        throw new Error("fail to fetch posts")
    }
    
};

export const getPost = async (slug) => {
   
    try{
        connectDb();
        const post = await Post.findOne({slug});
        return post;
    } catch(err) {

        console.log(err)
        throw new Error("fail to fetch post")
    }
    };

export const getUser = async (id) => {
    noStore();
    try{
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch(err) {

        console.log(err)
        throw new Error("fail to fetch user")
    }
    };

export const getUsers = async () => {
    
    try{
        connectDb();
        const users = await User.find();
        return users;
    } catch(err) {

        console.log(err)
        throw new Error("fail to fetch users")
    }
    };