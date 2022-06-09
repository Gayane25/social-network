import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { element } from "prop-types";
let token = JSON.parse(localStorage.getItem("user")||"{}").token;

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (dispatch, getState)=>{
        return await fetch("http://localhost:8000/api/posts?_page=1&_limit=10",{
            method: "GET",
            headers:{
                "authorization": `Bearer ${token}`
            },
        }
        ).then((res)=>res.json());
    }
);



// let owner= JSON.parse(localStorage.getItem("user")).owner;


// const createPost = createAsyncThunk(
//     "posts/createPost",
//     async({owner,content_title, content_description, content_image_url})=>{
//         return await axios({
//             method: "post",
//             url: "http://localhost:8000/api/posts", 
//             headers: { 
//                 "authorization": `Bearer ${token}` 
//             },
//             body : JSON.stringify({
//                 owner:owner,
//                 content_title:content_title,
//                 content_description:content_description,
//                 content_image_url:null
//             })
//         });
//     });
        


const postSlice = createSlice({
    name:"posts",
    initialState:{
        myPosts:[],
        status:null
    },
    extraReducers:{
        [getPosts.pending]:(state)=>{
            state.status="loading";
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.status="success";
            state.myPosts = action.payload;
        },
        [getPosts.rejected]:(state)=>{
            state.status ="failed";
        },
        
       

    },
    //     reducers:{
    //         addPost:(state, action)=>{
    //             // const newPost = {
    //             //     id:Math.random(),
    //             //     owner:action.payload.owner,
    //             //     content_title:action.payload.content_title,
    //             //     content_description:action.payload.content_title,
    //             //     content_image_url:action.payload.content_image_url
                    
    //             // };
    //             // state.push(newPost);
    //             state.myPosts.push(action.payload);
    //         },
    //         deletePost:(state, action)=>{
    //             return  state.myPosts.filter((item)=>item.id !== action.payload.id);
                
    //         },
    //         toggleLikePost:(state,action )=>{
            
    //             let index =  state.findIndex((element)=>element.id===action.payload.id);
    //             const IndexofLiker= state[index].likes.indexOf(action.payload.userId);
    //             console.log(IndexofLiker);
    //             if(IndexofLiker<0){
    //                 state[index].likes.push(action.payload.userId);
    //             } else{
    //                 state[index].likes=state[index].likes.filter(element=>element!==action.payload.userId);
    //             }
    //         },
    //         addComment:(state, action)=>{
    //             const newComment = {
    //                 commentId:Math.random(),
    //                 commentContent:action.payload.commentContent,
    //                 like:false
    //             };
                
    //             let index = state.findIndex((element)=> element.id === action.payload.id);
    //             // console.log(index);
    //             state[index].comments.push(newComment);
    //             // state.map(post=>post.content.comments.push(newComment));
                
    //         },
    //         toggleLikeComment:(state,action )=>{
    //             const postIndex = state.findIndex((element)=>element.id===action.payload.id);
    //             const commentIndex = state[postIndex].comments.findIndex(comment=>comment.commentId ===action.payload.commentId);
    //             state[postIndex].content.comments[commentIndex].like = !action.payload.like;
            
    //         },
    //         deleteComment:(state,action)=>{
    //             const postIndex = state.findIndex((element)=>element.id===action.payload.id);
    //             state[postIndex].content.comments.filter((item)=>item.commentId !==action.payload.commentId);
    //         },
    //     }
});

export const { addComment, toggleLikePost, toggleLikeComment, deleteComment} = postSlice.actions;
export default postSlice.reducer; 
// export {getPosts};


//comments:[{commentId:Math.random(),commentContent:"my first comment", like:[]}], for comments