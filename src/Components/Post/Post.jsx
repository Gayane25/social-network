import React from "react";
import FlexStyled from "./FlexStyled";
import { PostStyled } from "./PostStyled";
import Icon from "./Icon";
import profPic from "../../Assets/robotPic.png";
import ProfilePic from "./PostCreator/ProfilePic";
import ProfileName from "./PostCreator/ProfileName";
import CreateDate from "./PostCreator/CreateDate";
import {likeIcon,  moreIcon, commentIcon, shareIcon} from "../../Assets/svg/index.js";
import PostContent from "./PostContent/PostContent";


import InputBar from "./Comments/CommentBar";
import PropTypes from "prop-types";

Post.propTypes = {
    postItem: PropTypes.object,
};

function Post({postItem}) {
    return (
        <PostStyled >
            <FlexStyled direction ="column">
                <FlexStyled padding="10px" justify="space-between">
                    <FlexStyled>
                        <ProfilePic src ={profPic}/>
                        <FlexStyled direction="column">
                            <ProfileName padding="3px" postItem = {postItem}/>
                            <CreateDate color="black">9min ago</CreateDate>
                        </FlexStyled>
                    </FlexStyled>
                    <Icon src={moreIcon}/>
                </FlexStyled>
                <PostContent postItem={postItem} />

                <FlexStyled margin="3px" justify="space-between">
                    <span>
                        <Icon src={likeIcon}/> Like 
                    </span>
                    <span>
                        <Icon src={commentIcon}/> Comments
                    </span>
                    <span>
                        <Icon src={shareIcon}/> Share
                    </span>

                </FlexStyled>
                <FlexStyled justify="space-between" padding="5px">
                    <InputBar />
                </FlexStyled>
                
            </FlexStyled>
        </PostStyled>
    );
}

export default Post;