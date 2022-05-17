import { configureStore } from "@reduxjs/toolkit";
import addPostReducer from "./postSlice";
export default configureStore({
    reducer:{
        myPosts:addPostReducer,
    }
});

