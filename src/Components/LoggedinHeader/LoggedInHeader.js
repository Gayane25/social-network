import React from "react";
import {LoggedInHeaderStyled} from "./LoggedInHeaderStyled";
import ProfilePic from "../Post/PostCreator/ProfilePic";
import robotik from "../../Assets/robotPic.png";
import {homeIcon, settingsIcon,notifIcon, messageIcon} from "../../Assets/svg";
import Icon from "../Post/Icon";
function LoggedInHeader() {
    return (
        <LoggedInHeaderStyled>
            <input type="text" placeholder= " Search ....."/>
            <div>
                <span><Icon src={homeIcon}/></span>
                <span><Icon src ={settingsIcon}/></span>
                <span><Icon src ={messageIcon}/></span>
                <span><Icon src ={notifIcon}/></span>
                <ProfilePic src ={robotik} height="50px" width="50px"/>
            </div>
            
           
        </LoggedInHeaderStyled>
    );
}

export default LoggedInHeader;