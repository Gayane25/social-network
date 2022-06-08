import React, {useEffect, useState} from "react" ;
import { Link } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import PropTypes from "prop-types";
import {getPosts} from "../../redux/postSlice";
import LoggedInHeader from "../../Components/LoggedinHeader/LoggedInHeader";
import axios from "axios";
import SideBar from "../../Components/Sidebar/SideBar";
import { getSinglePostByID } from "../../redux/singlePostRequestSlice";

// Home.propTypes = {
//     user:PropTypes.object
// };


function Home() {
    const dispatch = useDispatch();
    // const [data, setData]=useState([]);

    // useEffect(()=> {
    //     fetch("http://localhost:8000/api/posts").then((res)=>res.json()).then((response)=>setData(response));
        
    // },[]);

    // console.log(data);

    // const getPostsfunc =()=>{
    //     dispatch(getPosts());
    // };
    // const getSinglePostfunc =()=>{
    //     dispatch(getSinglePostByID());
    // };
    // useEffect( ()=>{
    //     fetch("http://localhost:8000/api/posts", {
    //         method: "POST",
    //         headers: {
    //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGI0Yjc0MTQxNzI3OGZlOGQ1NmIzOSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjUzODQ1NDMyfQ.MKCTZQKyTh4l-4hllmXfpQISqwdKRNvOiFGvb7nGQA4",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             content_title:"title",
    //             content_description:"description",
    //             content_image_url:"contentImage"
    //         }),
    //     });



    //     // axios.post("http://localhost:8000/api/posts", {
    //     //     data:{
    //     //         content_title:"title",
    //     //         content_description:"description",
    //     //         content_image_url:"contentImage"
    //     //     },
    //     //     headers:{ 
    //     //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGI0Yjc0MTQxNzI3OGZlOGQ1NmIzOSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjUzODQ1NDMyfQ.MKCTZQKyTh4l-4hllmXfpQISqwdKRNvOiFGvb7nGQA4"
    //     //     } });
    // },[]);
    // const {myPosts} = useSelector((state)=>state.myPosts);
    // console.log(myPosts);
    // useEffect(()=>{
    //     dispatch(getPosts());
    // },[]);
    return <div>
        {/* <h2>Home</h2>
        <Link to= "/messages">Messages</Link>
        <Link to ="/profile">Profile</Link>
        <Link to="Settings">Settings</Link> */}
        <LoggedInHeader/>
        {/* <SideBar/> */}
        {/* <button onClick={getSinglePostfunc}>nayel</button> */}
        <CreatePostForm/>
       
        {/* <Post /> */}
        {/* {
            myPosts? myPosts.map(singlePost => (
                <Post key ={singlePost.content._id} singlePost={singlePost}  user={user}/>
            ) ) : ""
        } */}
    </div>;
}



export default Home;