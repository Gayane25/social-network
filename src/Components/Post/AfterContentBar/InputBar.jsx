import React from "react";
import ProfilePic from "../PostCreator/ProfilePic";
import profPic from "../../../Assets/robotPic.png";
import Icon from "../Icon";
import StyledInput from "./StyledInputBar";
import {sendIcon} from "../../../Assets/svg/index.js";


function InputBar(props) {
    return <>
        <ProfilePic src = {profPic} />
        <StyledInput><input type="text" /></StyledInput>
        <Icon src={sendIcon}/>
    </>;
}

export default InputBar;