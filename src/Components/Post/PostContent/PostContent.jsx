import React from "react";
import styled from "styled-components";
import PostDescription from "./PostDescription";
import PostTitle from "./PostTitle";
import PropTypes from "prop-types";
import {StyledPostContent} from "./postContetStyled";


PostContent.propTypes ={
    postItem:PropTypes.object,
};

function PostContent({postItem}) {
    return <StyledPostContent>
        <PostTitle postItem={postItem}/>
        <PostDescription postItem={postItem}/>
    </StyledPostContent>;
}

export default PostContent;