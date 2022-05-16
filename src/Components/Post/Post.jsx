import React from "react";
import FlexStyled from "./FlexStyled";
import { PostStyled } from "./PostStyled";
import Icon from "./Icon";
import profPic from "../../Assets/robotPic.png";
import ProfilePic from "./PostCreator/ProfilePic";
import ProfileName from "./PostCreator/ProfileName";
import CreateDate from "./PostCreator/CreateDate";
import {likeIcon,  moreIcon, commentIcon, shareIcon} from "../../Assets/svg/index.js";
import PostContent from "./PostContent/PostContent";
import PropTypes from "prop-types";
import CommentBar from "./Comments/CommentBar";
import {useDispatch} from "react-redux";
import {deletePost, toggleLikePost} from "../../redux/postSlice";

Post.propTypes = {
    singlePost: PropTypes.object,
};


function Post({singlePost}) {
    const dispatch = useDispatch();

    const handleDeleteClick =(id)=>{
        dispatch(deletePost({ id: id}));
    };
    const handleToggleLike =(id, likes)=>{
        dispatch (toggleLikePost({id:id, likes:!likes}));
    };
    return (
        <PostStyled >
            <FlexStyled direction ="column">
                <FlexStyled padding="10px" justify="space-between">
                    <FlexStyled>
                        <ProfilePic src ={profPic}/>
                        <FlexStyled direction="column">
                            <ProfileName padding="3px" name ={singlePost.owner}/>
                            <CreateDate color="black">9min ago</CreateDate>
                        </FlexStyled>
                    </FlexStyled>
                    <Icon src={moreIcon}/> <button onClick={()=>handleDeleteClick(singlePost.id)}>Delete</button>
                </FlexStyled>
                <PostContent content ={singlePost.content}/>

                <FlexStyled margin="3px" justify="space-between">
                    <span onClick={()=>handleToggleLike(singlePost.id, !singlePost.content.likes)}>
                        <Icon src={likeIcon}/> Like 
                    </span>
                    <span>
                        <Icon src={commentIcon}/> Comments
                    </span>
                    <span>
                        <Icon src={shareIcon}/> Share
                    </span>

                </FlexStyled>
                <FlexStyled justify="space-between" padding="5px">
                    <CommentBar singlePost = {singlePost}/>
                </FlexStyled>
                
            </FlexStyled>
        </PostStyled>
    );
}

export default Post;