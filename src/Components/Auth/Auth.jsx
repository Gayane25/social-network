import React from "react";
import { ButtonStyled } from "../CommonStyles/ButtonStyled";
import {AuthStyled} from "./AuthStyled";


function Auth() {
    return (
        <AuthStyled>
            <h1>Sign In</h1>
            <input type="text" placeholder="LogIn"/>
            <input type="password" placeholder="Password"/>
            <ButtonStyled background ="#6E00FF">Login</ButtonStyled>
        </AuthStyled>
    );
}

export default Auth;
