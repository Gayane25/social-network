import React from "react";
import {useSelector} from "react-redux";
import FlexStyled from "../FlexStyled";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

CommentsList.propTypes = {
    comments:PropTypes.object,
};


function CommentsList({comments}) {
    // const comments = useSelector((state)=>state.posts.map(singlePost=>singlePost.content.comments));
    // console.log(comments);
    return (
        <>
            {comments.map((comment)=>(
                <CommentItem key ={comment.commentId} comment={comment.commentContent}/>
            ))}
        </>
    );
}

export default CommentsList;
