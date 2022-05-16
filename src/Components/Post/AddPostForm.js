import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";

function AddPostForm() {
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
        <form onSubmit ={onSubmit}>
            <label htmlFor="title">Title<input type="text" name="title" value ={title} onChange={(event)=>setTitle(event.target.value)} /></label>
            <label htmlFor="description">Description<textarea typeof="text" name="description" value ={description} onChange={(event)=>setDescription(event.target.value)}/></label>
            <button onSubmit={onSubmit}>Post</button>
        </form>
    );
}

export default AddPostForm;