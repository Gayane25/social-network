import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let token = JSON.parse(localStorage.getItem("user")||"{}").token;

export const getTimelinePosts = createAsyncThunk(
    "timelinePosts/getTimelinePosts",
    async ()=>{
        return await fetch("localhost:8000/api/posts/timeline?_page=1&_limit=10",{
            method: "GET",
            headers:{
                "authorization": `Bearer ${token}`
            },
        }
        ).then((res)=>res.json());
    }
);


const timelinePostSlice = createSlice({
    name:"timelinePosts",
    initialState:{
        timelinePosts:[],
        status:null
    },
    extraReducers:{
        [getTimelinePosts.pending]:(state)=>{
            state.status="loading";
        },
        [getTimelinePosts.fulfilled]:(state,action)=>{
            state.status="success";
            state.timelinePosts = action.payload;
        },
        [getTimelinePosts.rejected]:(state)=>{
            state.status ="failed";
        }

    }
});

export default timelinePostSlice.reducer;


