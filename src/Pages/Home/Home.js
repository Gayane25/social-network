import React from "react" ;
import { Link } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { useSelector } from "react-redux";
import AddPostForm from "../../Components/Post/AddPostForm";


function Home() {
    const myposts = useSelector((state)=>state.posts);
    console.log(myposts);
    return <div>
        <h2>Home</h2>
        <Link to= "/messages">Messages</Link>
        <Link to ="/profile">Profile</Link>
        <Link to="Settings">Settings</Link>
        <AddPostForm />
        {
            myposts.map(singlePost => (
                <Post key ={singlePost.id} singlePost={singlePost} />
            
            ) )
        }
    </div>;
}



export default Home;