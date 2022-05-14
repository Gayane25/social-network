import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Icon from "./Icon";
import profPic from "../../Assets/robotPic.png";
import ProfilePic from "./PostCreator/ProfilePic";
import ProfileName from "./PostCreator/ProfileName";
import CreateDate from "./PostCreator/CreateDate";
import {likeIcon,  moreIcon, commentIcon, shareIcon} from "../../Assets/svg/index.js";
import PostContent from "./PostContent/PostContent";

import InputBar from "./AfterContentBar/InputBar";
import PropTypes from "prop-types";

Post.propTypes = {
    postItem: PropTypes.object,
};


const StyledPost = styled.div`
max-width:500px;
border:1px solid gray;
border-radius:10px;
border:none;
background-color:#e9ecf0;
margin-top:25px;
span {
    margin:5px;
};
`;


function Post({postItem}) {
    return (
        <StyledPost >
            <Flex direction ="column">
                <Flex padding="10px" justify="space-between">
                    <Flex>
                        <ProfilePic src ={profPic}/>
                        <Flex direction="column">
                            <ProfileName padding="3px" postItem = {postItem}/>
                            <CreateDate color="black">9min ago</CreateDate>
                        </Flex>
                    </Flex>
                    <Icon src={moreIcon}/>
                </Flex>
                <PostContent postItem={postItem} />

                <Flex margin="3px" justify="space-between">
                    <span>
                        <Icon src={likeIcon}/> Like 
                    </span>
                    <span>
                        <Icon src={commentIcon}/> Comments
                    </span>
                    <span>
                        <Icon src={shareIcon}/> Share
                    </span>

                </Flex>
                <Flex justify="space-between" padding="5px">
                    <InputBar />
                </Flex>
                
            </Flex>
        </StyledPost>
    );
}

export default Post;