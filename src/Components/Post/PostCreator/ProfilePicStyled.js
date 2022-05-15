import styled from "styled-components";

export const ProfilePicStyled = styled.img`
src:${props=>props.src};
width:${props=>props.width|| "40px"};
height:${props=>props.height || "40px"};
border-radius:50%;
`;