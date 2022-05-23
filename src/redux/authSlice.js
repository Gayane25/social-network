import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk(
    "authUser/loginUser",
    async({username,password})=>{
        const response = await axios.post("http://localhost:8000/api/auth/login",{username,password});
        console.log(response);
        const token = await response.data.token;
        if(token){
            localStorage.setItem("user", JSON.stringify(response.data));
        } 
        // return response.data;
    }
);
   


//     }

// );
// const login = (username, password) => {
//     return axios.post("http://localhost:8000/api/auth/login", {
//         username,
//         password,
//     }).then((response) => {
//         if (response.data.accessToken) {
//             localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         return response.data;
//     });
// };


const authSlice = createSlice({
    name:"logUser",
    initialState:{
        isAuth:false,
        loginedUser:{},
        status:null,
    },
    
    extraReducers:{
        [loginUser.pending]:(state,action)=>{
            state.status="loading";
        },
        [loginUser.fulfilled]:(state,action)=>{
       
            state.status="fulfilled";
            state.loginedUser = action.payload;  
            state.isAuth=true;
        },
        [loginUser.rejected]:(state,action)=>{
            state.status = "failed";
        }
    }
});

export default authSlice.reducer;
export const {authUser} = authSlice.actions;
export {loginUser};