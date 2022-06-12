import React, { useState } from "react";
import FlexStyled from "./FlexStyled";
import { Link } from "react-router-dom";
import {useParams} from "react-router";
import { PostStyled } from "./PostStyled";
import Icon from "./Icon";
import profPic from "../../Assets/robotPic.png";
import ProfilePic from "./PostCreator/ProfilePic";
import ProfileName from "./PostCreator/ProfileName";
import CreateDate from "./PostCreator/CreateDate";
import {likeIcon,  moreIcon, commentIcon, shareIcon} from "../../Assets/svg/index.js";
import PostContent from "./PostContent/PostContent";
import PropTypes from "prop-types";
// import CommentBar from "./Comments/CommentBar";
import {useDispatch} from "react-redux";
import "./PostStyles.css";
import { toggleLikePost, getPosts} from "../../redux/postSlice";
import {deletePost} from "../../redux/singlePostRequestSlice";
import formatDate from "../../helpers/formatDate";


Post.propTypes = {
    post: PropTypes.object,
    // user:PropTypes.object,
};

function Post({post}) {
    // const [commentsOpen,setCommentsOpen]= useState(false);
    const dispatch = useDispatch();
    const {postId} = useParams();

    const handleDeleteClick =(postId)=>{
       
        dispatch(deletePost(postId));
    };
    // const handleToggleLike =(id, userId)=>{
    //     dispatch (toggleLikePost({id:id, userId:user.userId}));
    // };
    return (
        <div className="post">
        
            <div className="postWrapper">
            
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={profPic}
                            // src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername">
                            {post.owner}
                            {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
                        </span>
                        <span className="postDate">{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <span onClick={()=>handleDeleteClick(post._id)}><img src={moreIcon}/></span>
                    
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.content.title}</span>
                    <p>{post.content.description}</p>
                    <img className="postImg" src={`http://localhost:8000/api/files/${post.content.image}`} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src= {likeIcon} alt="" /> 
                        <span className="postLikeCounter">3 people like it</span>
                    </div>
                    <div className="postBottomRight" >
                        <span className="postCommentText"> Comments</span>
                        <img src={commentIcon}/>
                    </div>
                    
                </div>
            </div>
            {/* {commentsOpen && <PostComments />} */}
        </div>
        // <PostStyled >
        //     <FlexStyled direction ="column">
        //         <FlexStyled padding="10px" justify="space-between">
        //             <FlexStyled>
        //                 <ProfilePic src ={profPic}/>
        //                 <FlexStyled direction="column">
        //                     <ProfileName padding="3px" name ={singlePost.owner}/>
        //                     <CreateDate color="black">9min ago</CreateDate>
        //                 </FlexStyled>
        //             </FlexStyled>
        //             <Icon src={moreIcon}/> <button onClick={()=>handleDeleteClick(singlePost.content._id)}>Delete</button>
        //         </FlexStyled>
        //         <PostContent content ={singlePost.content}/>

    //         <FlexStyled margin="3px" justify="space-between">
    //             <span onClick={()=>handleToggleLike(singlePost.content_id,singlePost._id)} style={singlePost.likes.includes(singlePost._id)? {color:"blue"}:{color:"black"}}>
    //                 <Icon src={likeIcon}/> Like 
    //             </span>
    //             <span>
    //                 <Icon src={commentIcon}/> Comments
    //             </span>
    //             <span>
    //                 <Icon src={shareIcon}/> Share
    //             </span>

    //         </FlexStyled>
                
    //         <CommentBar singlePost = {singlePost}/>
                
                
    //     </FlexStyled>
    // </PostStyled>
    );
}



export default Post;