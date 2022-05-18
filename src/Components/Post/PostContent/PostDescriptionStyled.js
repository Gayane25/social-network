import styled from "styled-components";

const PostDescriptionStyled = styled.p`
font-size: ${props=>props.font || "16px"};
color: ${props=>props.color || "black"}
`;

export default PostDescriptionStyled;