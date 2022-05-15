import PostDescription from "./PostDescription";
import PostTitle from "./PostTitle";
import {PostContentStyled} from "./PostContentStyled";
import PropTypes from "prop-types";


PostContent.propTypes ={
    postItem:PropTypes.object,
};

function PostContent({postItem}) {
    return <PostContentStyled>
        <PostTitle postItem={postItem}/>
        <PostDescription postItem={postItem}/>
    </PostContentStyled>;
}

export default PostContent;