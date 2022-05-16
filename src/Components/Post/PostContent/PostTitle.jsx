import PropTypes from "prop-types";
import PostTitleStyled from "./PostTitleStyled";

PostTitle.propTypes ={
    title :PropTypes.string,
};
function PostTitle({title}) {
    return (
        <PostTitleStyled>
            {title}
        </PostTitleStyled>
    );
}

export default PostTitle;