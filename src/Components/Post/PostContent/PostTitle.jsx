import PropTypes from "prop-types";
import PostTitleStyled from "./PostTitleStyled";

PostTitle.propTypes ={
    postItem :PropTypes.object
};
function PostTitle({postItem}) {
    return (
        <PostTitleStyled>
            {postItem.content.title}
        </PostTitleStyled>
    );
}

export default PostTitle;