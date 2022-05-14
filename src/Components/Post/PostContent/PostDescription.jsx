import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPostDescription = styled.p`
font-size: ${props=>props.font || "16px"}
color: ${props=>props.color || "black"}
`;

PostDescription.propTypes ={
    postItem: PropTypes.object,
};
function PostDescription({postItem}) {
    return <StyledPostDescription>
        {postItem.content.description}
    </StyledPostDescription>;

    
}

export default PostDescription;