import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Icon from "./Icon";
import profPic from "../../Assets/robotPic.png";
import ProfilePic from "./PostCreator/ProfilePic";
import ProfileName from "./PostCreator/ProfileName";
import CreateDate from "./PostCreator/CreateDate";
import moreIcon from "../../Assets/ellipsis-solid.svg";
import PostContent from "./PostContent/PostContent";
import Tool from "./AfterContentBar/Tool";
import likeIcon from "../../Assets/Like.svg";
import commentIcon from "../../Assets/Comment.svg";
import shareIcon from "../../Assets/Share.svg";




const StyledPost = styled.div`
max-width:500px;
border:1px solid gray;
border-radius:10px;
border:none;
background-color:#e9ecf0`;

function Post(props) {
    return (
        <StyledPost {...props}>
            <Flex direction ="column">
                <Flex padding="10px" justify="space-between">
                    <Flex>
                        <ProfilePic src ={profPic}/>
                        <Flex direction="column">
                            <ProfileName padding="3px">Gayane Babayan</ProfileName>
                            <CreateDate color="black">9min ago</CreateDate>
                        </Flex>
                    </Flex>
                    <Icon src={moreIcon}/>
                </Flex>
                <PostContent />
                
                <Flex margin="3px" justify="space-between">
                    <Tool>
                        <Icon src={likeIcon}/> Like 
                    </Tool>
                    <Tool>
                        <Icon src={commentIcon}/> Comments
                    </Tool>
                    <Tool>
                        <Icon src={shareIcon}/> Share
                    </Tool>

                </Flex>
                
            </Flex>
        </StyledPost>
    );
}

export default Post;