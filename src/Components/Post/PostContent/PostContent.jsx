import PostDescription from "./PostDescription";
import PostTitle from "./PostTitle";
import {PostContentStyled} from "./PostContentStyled";
import PropTypes from "prop-types";
import PostImage from "./PostImage";


PostContent.propTypes ={
    content:PropTypes.object,
};

function PostContent({content}) {
    return <PostContentStyled>
        <PostTitle title={content.title}/>
        <PostDescription description={content.description}/>
        <PostImage image={content.image}/>
    </PostContentStyled>;
}

export default PostContent;