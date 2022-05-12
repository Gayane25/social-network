import React from "react";
import styled from "styled-components";

const StyledProfPic = styled.img`
src:${props=>props.src};
width:${props=>props.width|| "40px"};
height:${props=>props.height || "40px"};
border-radius:50%;
`;

function ProfilePic(props) {
    return (
        <StyledProfPic {...props} />
    );
}

export default ProfilePic;