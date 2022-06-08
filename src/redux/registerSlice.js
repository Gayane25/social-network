import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";


const registerUser = createAsyncThunk(
    "registereduser/registerUser",
    async({username, password})=>{
        const response = await axios.post("http://localhost:8000/api/auth/registration",{username,password});
        return response.data;
    }
);


const registerSlice = createSlice({
    name:"registeredUser",
    initialState:{
        user:{
        },
        status:null,
    },
    extraReducers:{
        [registerUser.pending]:(state,action)=>{
            state.status="loading";
        },
        [registerUser.fulfilled]:(state,action)=>{
           
            state.status="fulfilled";
            state.user =action.payload;  
            
        },
        [registerUser.rejected]:(state,action)=>{
            state.status = "failed";
        }
    }

});


export const {createUser} = registerSlice.actions;
export default registerSlice.reducer;
export {registerUser};





