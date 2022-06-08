import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/singlePostRequestSlice";
import  CreatePostStyled from "./CreatePostFormStyled";
import ProfilePic from "./PostCreator/ProfilePic";
import prof from "../../Assets/robotPic.png";
import PropTypes from "prop-types";
import axios from "axios";

// let accesstoken = localStorage.getItem("user")||"{}";
// const token = JSON.parse(accesstoken).token; // 
CreatePostForm.propTypes = {
    user:PropTypes.object
};
function CreatePostForm() {
    const state = useSelector((state)=>state.singlePost);
    const [title, setTitle] =useState("");
    const [description, setDescription] =useState("");
    const [contentImage, setContentImage]=useState("");
    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(createPost({
            content_title:title,
            content_description:description,
            content_image_url:contentImage}));
        setTitle("");
        setDescription("");
        setContentImage("");
        console.log(state);
    };
   
    return (
       
        <CreatePostStyled >
            <ProfilePic src={prof}/>
            <form onSubmit ={onSubmit}>  
                <input type="text" value ={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Add a title..."/>
                <hr/>
                <textarea type ="text" value ={description} onChange={(event)=>setDescription(event.target.value)} placeholder="Add a description..."/>
                <input type ="text" value={contentImage} onChange={(event)=>setContentImage(event.target.value)}/>
                <button onSubmit={onSubmit}>Post</button>
            </form> 
        </CreatePostStyled>
    );
}

export default CreatePostForm;