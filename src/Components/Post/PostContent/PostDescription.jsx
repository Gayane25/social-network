import React from "react";
import styled from "styled-components";

const StyledPostDescription = styled.p`
font-size: ${props=>props.font || "16px"}
color: ${props=>props.color || "black"}
`;
function PostDescription(props) {
    return <StyledPostDescription {...props}/>;

    
}

export default PostDescription;