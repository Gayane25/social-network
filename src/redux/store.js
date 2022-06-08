import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice";
import authUser from "./authSlice";
import addPostReducer from "./singlePostRequestSlice";
import getPostReducer from "./postSlice";
import timeLineReducer from "./timelinePostSlice";
import usersInfoReducer from "./userSlice";
import singleUserReducer from "./singleUserSlice";

export default configureStore({
    reducer:{
        posts:getPostReducer,
        timelinePosts :timeLineReducer,
        singlePost:addPostReducer,
        registeredUser:registerReducer,
        logUser:authUser,
        usersInfo:usersInfoReducer,
        singleUserInfo:singleUserReducer
    }
});

