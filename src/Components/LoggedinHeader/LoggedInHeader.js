import React from "react";
import {LoggedInHeaderStyled} from "./LoggedInHeaderStyled";
import ProfilePic from "../Post/PostCreator/ProfilePic";
import robotik from "../../Assets/robotPic.png";
import {homeIcon, settingsIcon,notifIcon, messageIcon} from "../../Assets/svg";
import { useSelector,useDispatch  } from "react-redux";
import { useNavigate} from "react-router";
import {logOutUser} from "../../redux/authSlice";
import Icon from "../Post/Icon";
function LoggedInHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoutClick =()=>{
        dispatch(logOutUser());
        navigate("/login");   
    };
    return (
        <LoggedInHeaderStyled>
            <input type="text" placeholder= " Search ....."/>
            <div>
                <ProfilePic src ={robotik} height="50px" width="50px"/>
                <span onClick={handleLogoutClick}>Logout</span>
            </div>
            
           
        </LoggedInHeaderStyled>
    );
}

export default LoggedInHeader;