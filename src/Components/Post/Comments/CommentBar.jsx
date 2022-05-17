import React from "react";
import ProfilePic from "../PostCreator/ProfilePic";
import profPic from "../../../Assets/robotPic.png";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";
import FlexStyled from "../FlexStyled";
import PropTypes from "prop-types";

CommentBar.propTypes = {
    singlePost:PropTypes.object,
};


function CommentBar({singlePost}) {
    return (<>
        <FlexStyled>
            <ProfilePic src = {profPic} />
            <AddCommentForm singlePost={singlePost} comments ={singlePost.comments}/>
        </FlexStyled>
        <CommentsList comments = {singlePost.comments} singlePostId = {singlePost.id} />
    </>);
       
    
}

export default CommentBar;