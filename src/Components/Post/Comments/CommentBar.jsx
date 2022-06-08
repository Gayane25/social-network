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


function CommentBar() {
    return (<>
        <FlexStyled>
            <ProfilePic src = {profPic} />
            <AddCommentForm />
        </FlexStyled>
        <CommentsList  />
    </>);
       
    
}

export default CommentBar;