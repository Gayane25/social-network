import React from "react";
import {LoggedInHeaderStyled} from "./LoggedInHeaderStyled";
function LoggedInHeader() {
    return (
        <LoggedInHeaderStyled>
            <input type="text" placeholder="Search ....."/>

        </LoggedInHeaderStyled>
    );
}

export default LoggedInHeader;