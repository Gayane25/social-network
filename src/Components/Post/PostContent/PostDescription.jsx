import React from "react";
import PropTypes from "prop-types";
import PostDescriptionStyled from "./PostDescriptionStyled";

PostDescription.propTypes ={
    postItem: PropTypes.object,
};
function PostDescription({postItem}) {
    return <PostDescriptionStyled>
        {postItem.content.description}
    </PostDescriptionStyled>;

    
}

export default PostDescription;