import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("user")||"{}").token;

// let userId = JSON.parse(localStorage.getItem("user")||"{}")._id;
//{title, description, image}
//content_title,
// content_description,
// content_image_url
const createPost = createAsyncThunk("posts/createPost",
    async({content_title, content_description, contentImage})=>{

        const response = await fetch("http://localhost:8000/api/posts", {
            method: "POST",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content_title,
                content_description,
                "content_image_url": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            })
        });

        const data = await response.json();
        console.log(data);
        return data;

    }

);
const updatePost = createAsyncThunk(
    "updated/updatePost",
    async(postId)=>{
        return await fetch(`http://localhost:8000/api/posts/${postId}`,{
            method: "'PUT",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
        ).then((res)=>res.json());
    }
);
const getSinglePostByID = createAsyncThunk(
    async(postId)=>{
        const response = await fetch(`localhost:8000/api/posts/${postId}`, {
            method: "GET",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        // console.log(data);
        return data;

    }
);

const likePost = createAsyncThunk(
    "liked/likePost",
    async(postId)=>{
        return await fetch(`localhost:8000/api/posts/${postId}/like`,{
            method: "'PUT",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
        ).then((res)=>res.json());
    }
);
const deletePost = createAsyncThunk(
    "deletedPost/deleteCurrentPost",
    async(postId)=>{
        return await fetch(`http://localhost:8000/api/posts/${postId}`,{
            method: "'DELETE",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }
        );
        // .then((res)=>res.json());
    }
);

const singlePostRequestSlice = createSlice({
    name: "singlePost",
    initialState:{
        content:{},
        status:null,
    },
    extraReducers:{
        [createPost.pending]:(state)=>{
            state.status="loading";
        },
        [createPost.fulfilled]:(state,action)=>{
            state.status="fulfilled";
            state.content= action.payload;
        },
        [createPost.rejected]:(state)=>{
            state.status ="failed";
        },
        [updatePost.pending]:(state)=>{
            state.status="loading";
        },
        [updatePost.fulfilled]:(state,action)=>{
            state.status="success";
            state.content = action.payload;
        },
        [updatePost.rejected]:(state)=>{
            state.status ="failed";
        },
        [getSinglePostByID.pending]:(state)=>{
            state.status="loading";
        },
        [getSinglePostByID.fulfilled]:(state,action)=>{
            state.status="success";
            state.content = action.payload;
        },
        [getSinglePostByID.rejected]:(state)=>{
            state.status ="failed";
        },
        [likePost.pending]:(state)=>{
            state.status="loading";
        },
        [likePost.fulfilled]:(state,action)=>{
            state.status="success";
            state.content = action.payload;
        },
        [likePost.rejected]:(state)=>{
            state.status ="failed";
        },
        [deletePost.pending]:(state)=>{
            state.status="loading";
        },
        [deletePost.fulfilled]:(state,action)=>{
            state.status="success";
            state.content = action.payload;
        },
        [deletePost.rejected]:(state)=>{
            state.status ="failed";
        },
       
    },

});


export default singlePostRequestSlice.reducer;
export {createPost, updatePost, getSinglePostByID, likePost, deletePost};

