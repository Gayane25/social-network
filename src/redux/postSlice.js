import { createSlice } from "@reduxjs/toolkit";
import { element } from "prop-types";


const postSlice = createSlice({
    name:"posts",
    initialState:[
        { id:Math.random(),
            owner:"Reddit",
            content:{
                title:"Lorem Ipsum",
                description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                image:null
            },

            likes:[ 125, 1258,123456],
            comments:[{commentId:Math.random(),commentContent:"my first comment", like:[]}],
        },
    ],
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
            return  state.filter((item)=>item.id !== action.payload.id);
            
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