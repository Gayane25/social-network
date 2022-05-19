import styled from "styled-components";

export const IconStyled = styled.img`
src: ${props=>props.src};
width:${props=>props.width || "32px"};
height:${props=>props.height || "32px"};
padding: ${({padding})=>padding ||"5px"};

`;

