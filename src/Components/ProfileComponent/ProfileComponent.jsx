import React, { useEffect } from "react";
import LoggedInHeader from "../LoggedinHeader/LoggedInHeader";
import SideBar from "../Sidebar/SideBar";
import profilePic from "../../Assets/robotPic.png";
import backgroundImage from "../../Assets/background.jpg";
import "./ProfileComponentStyles.css";
import Post from "../Post/Post";
import {getPosts} from "../../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
function ProfileComponent() {
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[]);
    const myposts = useSelector((state)=>state.posts.myPosts);
    console.log(myposts);
    return (
        <>
            <LoggedInHeader />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={backgroundImage}
                                alt="profileCoverImg"
                            />
                            <img
                                className="profileUserImg"
                                src={profilePic}
                                alt="profileCover"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        {
                            myposts.map((post)=><Post key={post._id} post={post}/>)
                        }
                        
                        {/* <Rightbar profile/> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;