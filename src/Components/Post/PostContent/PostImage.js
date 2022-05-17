import React from "react";
import PropTypes from "prop-types";
import { PostImageStyled } from "./PostImageStyled";
PostImage.propTypes ={
    image:PropTypes.string
};

function PostImage({image}) {
    return (
        <PostImageStyled>
            {image && <img src={image}/>} 
        </PostImageStyled>
       
    );
}

export default PostImage;