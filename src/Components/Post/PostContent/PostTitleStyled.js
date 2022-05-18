import styled from "styled-components";

const PostTitleStyled = styled.h2`
    font-size: ${props=>props.font || "21px"};
    color: ${props=>props.color || "black"}
`;

export default PostTitleStyled;