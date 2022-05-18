import React from "react";
import {useSelector} from "react-redux";
import FlexStyled from "../FlexStyled";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";
import {CommentsListStyled} from "./CommentsListStyled";

CommentsList.propTypes = {
    // comments:PropTypes.object,
    singlePostId:PropTypes.string,
    comments:PropTypes.array
};


function CommentsList({ comments, singlePostId}) {
    
    // const comments = useSelector((state)=>state.posts.map(singlePost=>singlePost.content.comments));
    // console.log(comments);
    return (
        <CommentsListStyled>
            {comments.map((comment)=>(
                <CommentItem key ={comment.commentId} comment={comment} singlePostId={singlePostId}/>
            ))}
        </CommentsListStyled>
    );
}

export default CommentsList;
