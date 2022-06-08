import React from "react";
import PropTypes from "prop-types";
import {CommentItemStyled} from "./CommentItemStyled";
import ProfilePic from "../PostCreator/ProfilePic";
import profPic from "../../../Assets/robotPic.png";
// import {toggleLikeComment} from "../../../redux/postSlice";
import {useDispatch} from "react-redux";

CommentItem.propTypes = {
    comment:PropTypes.object,
    singlePostId:PropTypes.number,
};

// function CommentItem({comment, singlePostId}) {
//     const dispatch = useDispatch();

//     const handleLikeClick=(id, commentId)=>{
//         dispatch(toggleLikeComment({id:id, commentId:commentId}));
//     };
//     return (<> 
//         <CommentItemStyled>
//             <ProfilePic src ={profPic} />
//             <p>{comment.commentContent}</p>
//         </CommentItemStyled>
//         <span onClick={()=>handleLikeClick(singlePostId, comment.commentId)} >Like</span>
//     </>
//     );
// }
// export default CommentItem;

// profilePic,
// profileName
// comment in paragraphs
// icon like


// style={comment.like? {color:"blue"}:{color:"black"}}