import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import  CreatePostStyled from "./CreatePostFormStyled";
import ProfilePic from "./PostCreator/ProfilePic";
import prof from "../../Assets/robotPic.png";
import PropTypes from "prop-types";
CreatePostForm.propTypes = {
    user:PropTypes.object
};
function CreatePostForm({user}) {
    const [title, setTitle] =useState("");
    const [description, setDescription] =useState("");
    const dispatch = useDispatch();
    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(
            addPost({
                title:title,
                description:description,
            })
        );
    };

    return (
        <CreatePostStyled >
            <ProfilePic src={prof} />
            <form onSubmit ={onSubmit}>
                <input type="text" value ={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Add a title..."/>
                <hr/>
                <textarea typeof="text" value ={description} onChange={(event)=>setDescription(event.target.value)} placeholder="Add a description..."/>
                <button onSubmit={onSubmit}>Post</button>
            </form>
        </CreatePostStyled>
    );
}

export default CreatePostForm;