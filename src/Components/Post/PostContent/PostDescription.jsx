import React from "react";
import PropTypes from "prop-types";
import PostDescriptionStyled from "./PostDescriptionStyled";

PostDescription.propTypes ={
    description: PropTypes.string,
};
function PostDescription({description}) {
    return <PostDescriptionStyled>
        {description}
    </PostDescriptionStyled>;
    
}

export default PostDescription;