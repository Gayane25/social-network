import React from "react";
import {AuthStyled} from "./AuthStyled";
import {ButtonStyled} from "../CommonStyles/ButtonStyled";

function RegisterForm() {
    return (
        <AuthStyled>
            <h1>Sign Up</h1>
            <input type="text" placeholder="LogIn"/>
            <input type="password" placeholder="Password"/>
            {/* <span style={{color:"red"}}>Please input valid value</span> */}
            <ButtonStyled background ="#6E00FF">Sign up</ButtonStyled>
        </AuthStyled>
    );
}

export default RegisterForm;