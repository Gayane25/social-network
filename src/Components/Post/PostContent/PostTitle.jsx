import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPostTitle = styled.h2`
    font-size: ${props=>props.font || "21px"}
    color: ${props=>props.color || "black"}
`;
PostTitle.propTypes ={
    postItem :PropTypes.object
};
function PostTitle({postItem}) {
    return (
        <StyledPostTitle>
            {postItem.content.title}
        </StyledPostTitle>
    );
}

export default PostTitle;