import React from "react";
import PropTypes from "prop-types";

CommentItem.propTypes = {
    comment:PropTypes.object,
};

function CommentItem({comment}) {
    return<p>{comment.commentContent}</p>;
}
export default CommentItem;

//profilePic,
//profileName
//comment in paragraphs
//icon like