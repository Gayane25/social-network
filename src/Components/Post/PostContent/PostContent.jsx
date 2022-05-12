import React from "react";
import styled from "styled-components";
import PostDescription from "./PostDescription";
import PostTitle from "./PostTitle";

const StyledPostContent = styled.div`
border:1px solid gray;
background-color:white;
border:none;
border-radius:5px;
align-items:center;
text-align:center;
padding:8px;
margin:5px;
`;

function PostContent(props) {
    return <StyledPostContent>
        <PostTitle>Barevi mej lines Tigran jan</PostTitle>
        <PostDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</PostDescription>
    </StyledPostContent>;
}

export default PostContent;