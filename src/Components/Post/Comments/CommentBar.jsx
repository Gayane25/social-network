import React from "react";
import ProfilePic from "../PostCreator/ProfilePic";
import profPic from "../../../Assets/robotPic.png";
import Icon from "../Icon";
import InputBarStyled from "./CommentBarStyled";
import {sendIcon} from "../../../Assets/svg/index.js";


function CommentBar(props) {
    return <>
        <ProfilePic src = {profPic} />
        <InputBarStyled><input type="text" /></InputBarStyled>
        <Icon src={sendIcon}/>
    </>;
}

export default CommentBar;