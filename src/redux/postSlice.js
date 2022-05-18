import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { element } from "prop-types";

const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (dispatch, getState)=>{
        return await fetch("http://localhost:5000/api/posts").then((res)=>res.json());
    }
);

const postSlice = createSlice({
    name:"posts",
    initialState:{
        myPosts:[],
        status:null
    },
    extraReducers:{
        [getPosts.pending]:(state, action)=>{
            state.status="loading";
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.status="success";
            state.myPosts = action.payload;
        },
        [getPosts.rejected]:(state,action)=>{
            state.status ="failed";
        }
    },
    reducers:{
        addPost:(state, action)=>{
            const newPost = {
                id:Math.random(),
                owner:"Reddit",
                content:{
                    title:action.payload.title,
                    description:action.payload.description,
                    image:null,
                },
                likes:[],
                comments:[],
                
            };
            state.push(newPost);
        },
        deletePost:(state, action)=>{
            return  state.myPosts.filter((item)=>item.id !== action.payload.id);
            
        },
        toggleLikePost:(state,action )=>{
        
            let index =  state.findIndex((element)=>element.id===action.payload.id);
            const IndexofLiker= state[index].likes.indexOf(action.payload.userId);
            console.log(IndexofLiker);
            if(IndexofLiker<0){
                state[index].likes.push(action.payload.userId);
            } else{
                state[index].likes=state[index].likes.filter(element=>element!==action.payload.userId);
            }
        },
        addComment:(state, action)=>{
            const newComment = {
                commentId:Math.random(),
                commentContent:action.payload.commentContent,
                like:false
            };
            
            let index = state.findIndex((element)=> element.id === action.payload.id);
            // console.log(index);
            state[index].comments.push(newComment);
            // state.map(post=>post.content.comments.push(newComment));
            
        },
        toggleLikeComment:(state,action )=>{
            const postIndex = state.findIndex((element)=>element.id===action.payload.id);
            const commentIndex = state[postIndex].comments.findIndex(comment=>comment.commentId ===action.payload.commentId);
            state[postIndex].content.comments[commentIndex].like = !action.payload.like;
            
        },
        deleteComment:(state,action)=>{
            const postIndex = state.findIndex((element)=>element.id===action.payload.id);
            state[postIndex].content.comments.filter((item)=>item.commentId !==action.payload.commentId);
        },
    }
});

export const {addPost, addComment, deletePost, toggleLikePost, toggleLikeComment, deleteComment} = postSlice.actions;
export default postSlice.reducer; 
export {getPosts};


//comments:[{commentId:Math.random(),commentContent:"my first comment", like:[]}], for comments