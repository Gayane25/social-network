import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/singlePostRequestSlice";
import  CreatePostStyled from "./CreatePostFormStyled";
import ProfilePic from "./PostCreator/ProfilePic";
import prof from "../../Assets/robotPic.png";
import PropTypes from "prop-types";
import axios from "axios";
let token = JSON.parse(localStorage.getItem("user")||"{}").token;
// let accesstoken = localStorage.getItem("user")||"{}";
// const token = JSON.parse(accesstoken).token; // 
CreatePostForm.propTypes = {
    user:PropTypes.object
};
function CreatePostForm() {
    const state = useSelector((state)=>state.singlePost);
    const [title, setTitle] =useState("");
    const [description, setDescription] =useState("");
    const dispatch = useDispatch();
    const [file,setFile] = useState();

    const onSubmit = (event)=>{
        event.preventDefault();
        const newPost = {
            content_title:title,
            content_description:description,
        };

        if(file){
            const fileName = Date.now() + file.name;
            const data = new FormData();
            data.append("file", file);
            try{
                fetch("http://localhost:8000/api/upload",{
                    method:"POST",
                    headers:{
                        "Authorization": `Bearer ${token}`,
                    },
                    body: data
                }).then(res => res.json()).then(fileInfo => {
                    newPost.content_image_url = fileInfo.fileName;
                    dispatch(createPost(newPost));
                });
            }catch (err){
                console.log(err);
            }
        }else{
            dispatch(createPost(newPost));
        }
        setTitle("");
        setDescription("");
    };
   
    return (
       
        <CreatePostStyled >
            <ProfilePic src={prof}/>
            <form onSubmit ={onSubmit}>  
                <input type="text" value ={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Add a title..."/>
                <hr/>
                <textarea type ="text" value ={description} onChange={(event)=>setDescription(event.target.value)} placeholder="Add a description..."/>
                <input type ="file"  onChange={(event)=>setFile(event.target.files[0])}/>
                <button onSubmit={onSubmit}>Post</button>
            </form> 
        </CreatePostStyled>
    );
}

export default CreatePostForm;