import React from "react";
import styled from "styled-components";

const StyledTool = styled.span`
margin:5px;
`;

function Tool(props) {
    return <StyledTool {...props}/>;          
}

export default Tool;