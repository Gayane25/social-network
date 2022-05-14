import React from "react" ;
import { Link } from "react-router-dom";
import Post from "../../Components/Post/Post";
import myPosts from "../../myPosts/myPosts";


function Home() {
    
    return <div>
        <h2>Home</h2>
        <Link to= "/messages">Messages</Link>
        <Link to ="/profile">Profile</Link>
        <Link to="Settings">Settings</Link>
        {
            myPosts.map(postItem => <Post key ={postItem.id} postItem ={postItem}/>)
        }
    </div>;
}



export default Home;