import React from "react";
import PropTypes from "prop-types";

CommentItem.propTypes = {
    comment:PropTypes.string,
};

function CommentItem({comment}) {
    return (
        <p>{comment}</p>
    );
}
export default CommentItem;

//profilePic,
//profileName
//comment in paragraphs
//icon like