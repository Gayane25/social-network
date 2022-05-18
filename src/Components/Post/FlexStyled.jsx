import styled from "styled-components";

const FlexStyled = styled.div`
display:flex;
flex-direction: ${props=>props.direction||"row"};
align-items: ${props=>props.align || "stretch"};
justify-content: ${props=>props.justify || "stretch"};
padding: ${({padding})=>padding ||"0"};
margin: ${({margin})=>margin || "0"};
flex-wrap:${props=>props.wrap || "no-wrap"};
width:inherit;
`;


export default FlexStyled;