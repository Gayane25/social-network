import React from "react";
import { Link } from "react-router-dom";
import {homeIcon, messageIcon, settingsIcon, friendsIcon, userIcon} from "../../Assets/svg/index";
import "./SideBarStyles.css";
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to ="/">
                        <li>
                            <li className="sidebarListItem">
                                <span className="sidebarIcon" ><img src ={homeIcon}/>Feed</span>
                                {/* <span className="sidebarListItemText"></span> */}
                            </li>
                        </li>
                    </Link>
                    <Link to ="/messages">
                        <li className="sidebarListItem">
                            <span className="sidebarIcon" ><img src ={messageIcon}/>Chats</span>
                            {/* <span className="sidebarListItemText"></span> */}
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="sidebarListItem">
                            <span className="sidebarIcon" ><img src ={userIcon}/>Profile</span>
                            {/* <span className="sidebarListItemText"></span> */}
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className="sidebarListItem">
                            <span className="sidebarIcon" ><img src={settingsIcon}/>Settings</span>
                            {/* <span className="sidebarListItemText"></span> */}
                        </li>
                    </Link>
                    <Link to="/friends">
                        <li className="sidebarListItem">
                            <span className="sidebarIcon" ><img src={friendsIcon}/>Friends</span>
                            {/* <span className="sidebarListItemText"></span> */}
                        </li>
                    </Link>
                </ul>
                {/* <hr className="sidebarHr" /> */}
                {/* <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul> */}
            </div>
        </div>
    );
}

export default SideBar;