import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice";
import authUser from "./authSlice";
import addPostReducer from "./postSlice";
export default configureStore({
    reducer:{
        myPosts:addPostReducer,
        registeredUser:registerReducer,
        logUser:authUser,
        
        
    }
});

