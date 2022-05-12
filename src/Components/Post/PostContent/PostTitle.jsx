import React from "react";
import styled from "styled-components";

const StyledPostTitle = styled.h2`
    font-size: ${props=>props.font || "21px"}
    color: ${props=>props.color || "black"}
`;

function PostTitle(props) {
    return (
        <StyledPostTitle {...props}/>
    );
}

export default PostTitle;