import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let token = JSON.parse(localStorage.getItem("user")||"{}").token;

export const getAllUsers = createAsyncThunk("users/getAllUsers",
    async()=>{
        const response = await fetch("localhost:8000/api/user", {
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
const userSlice = createSlice({
    name:"usersInfo",
    initialState:{
        allUsers:[],
        status:null
    },
    extraReducers:{
        [getAllUsers.pending]:(state)=>{
            state.status="loading";
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.status="fulfilled";
            state.allUsers = action.payload;
        },
        [getAllUsers.rejected]:(state)=>{
            state.status ="failed";
        },

    }
});

export default userSlice.reducer;

