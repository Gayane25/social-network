import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"posts",
    initialState:[
        { id:Math.random(),
            owner:"Reddit",
            content:{
                title:"Lorem Ipsum",
                description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                image:null,
                likes:false,
                comments:[{commentId:Math.random(),commentContent:"my first comment", like:false}],
            }
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
                    likes:false,
                    comments:[],
                }
                
            };
            state.push(newPost);
        },
        deletePost:(state, action)=>{
            return  state.filter((item)=>item.id !== action.payload.id);
            
        },
        toggleLikePost:(state,action )=>{
        
            let index =  state.findIndex((element)=>element.id===action.payload.id);
            state[index].content.likes = !action.payload.likes;
        
            
        },
        addComment:(state, action)=>{
            const newComment= {
                commentId:Math.random(),
                commentContent:action.payload.commentContent,
                like:false
            };
            state.map((singlePost)=>singlePost.content.comments.push(newComment));
           
        },
        toggleLikeComment:(state,action )=>{
            const postIndex = state.findIndex((element)=>element.id===action.payload.id);
            const commentIndex = state[postIndex].content.comments.findIndex(comment=>comment.commentId ===action.payload.id);
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