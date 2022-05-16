import React from "react";
import ProfilePic from "../PostCreator/ProfilePic";
import profPic from "../../../Assets/robotPic.png";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";
import FlexStyled from "../FlexStyled";



function CommentBar() {
    return <FlexStyled>
        <ProfilePic src = {profPic} />
        <AddCommentForm />
        <CommentsList />
       
    </FlexStyled>;
}

export default CommentBar;