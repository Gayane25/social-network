import React, {useEffect} from "react" ;
import { Link } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import PropTypes from "prop-types";
import {getPosts} from "../../redux/postSlice";

Home.propTypes = {
    user:PropTypes.object
};

function Home({user}) {
    const dispatch = useDispatch();
    const {myPosts} = useSelector((state)=>state.myPosts);
    // console.log(myPosts);
    useEffect(()=>{
        dispatch(getPosts());
    },[]);
    return <div>
        {/* <h2>Home</h2>
        <Link to= "/messages">Messages</Link>
        <Link to ="/profile">Profile</Link>
        <Link to="Settings">Settings</Link> */}
        <CreatePostForm user ={user} />
        
        {
            myPosts && myPosts.map(singlePost => (
                <Post key ={singlePost.content._id} singlePost={singlePost}  user={user}/>
            ) )
        }
    </div>;
}



export default Home;