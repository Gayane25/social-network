import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let token = JSON.parse(localStorage.getItem("user")||"{}").token;

export const getSingleUser = createAsyncThunk("user/getSingleUser",
    async()=>{
   
        const response = await fetch("http://localhost:8000/api/user/", {
            method: "GET",
            headers:{
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            
        });

        const data = await response.json();
        console.log(data);
        return data;

    }
    

);

const singleUserSlice = createSlice({
    name:"singleUser",
    initialState:{
        singleUserInfo:{},
        status:null
    },
    extraReducers:{
        [getSingleUser.pending]:(state)=>{
            state.status="loading";
        },
        [getSingleUser.fulfilled]:(state,action)=>{
            state.status="fulfilled";
            state.singleUserInfo = action.payload;
        },
        [getSingleUser.rejected]:(state)=>{
            state.status ="failed";
        },
    }
});

export default singleUserSlice.reducer;

