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
            const newPost ={
                id:Math.random(),
                owner:"Reddit",
                content:{
                    title:action.payload.title,
                    description:action.payload.description,
                    image:null,
                    like:false,
                    comments:[],
                }
                
            };
            state.push(newPost);
        },
        addComment:(state, action)=>{
            // let foundPost = state.find((item)=>item.id ===action.payload.id);
            const newComment= {
                commentId:Math.random(),
                commentContent:action.payload.commentContent,
                like:false
            };
            state.map((singlePost)=>singlePost.content.comments.push(newComment));
        }
    }
});

export const {addPost, addComment} = postSlice.actions;
export default postSlice.reducer; 