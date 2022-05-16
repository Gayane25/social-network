import React from "react";
import PropTypes from "prop-types";

CommentItem.propTypes = {
    commentContent:PropTypes.string,
};

function CommentItem({commentContent}) {
    return (
        <p>{commentContent}</p>
    );
}
export default CommentItem;

//profilePic,
//profileName
//comment in paragraphs
//icon like