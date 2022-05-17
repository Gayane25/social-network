import React from "react" ;
import { Link } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { useSelector } from "react-redux";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import PropTypes from "prop-types";

Home.propTypes = {
    user:PropTypes.object
};

function Home({user}) {
    const myposts = useSelector((state)=>state.posts);
    return <div>
        {/* <h2>Home</h2>
        <Link to= "/messages">Messages</Link>
        <Link to ="/profile">Profile</Link>
        <Link to="Settings">Settings</Link> */}
        <CreatePostForm user ={user} />
        
        {
            myposts.map(singlePost => (
                <Post key ={singlePost.id} singlePost={singlePost}  user={user}/>
            ) )
        }
    </div>;
}



export default Home;