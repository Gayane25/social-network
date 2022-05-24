import React,{useState} from "react";
import { ButtonStyled } from "../CommonStyles/ButtonStyled";
import {AuthStyled} from "./AuthStyled";
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import gifImage from "../../Assets/network.gif";
import FlexStyled from "../Post/FlexStyled";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [username, setusername]= useState("");
    const [password, setpassword]=useState("");
    const token = useSelector((state)=>state.logUser.token);
    const navigate = useNavigate();

    const isAuth = useSelector((state)=>state.logUser.isAuth);
    const dispatch=useDispatch();
    const handleLoginSubmit = (event) =>{
        event.preventDefault();
        dispatch(loginUser({username:username, password:password}));
        navigate("/");
    };

    return (
        
        <AuthStyled onSubmit={handleLoginSubmit}>
            <h1>Log In</h1>
            <input type="text" value={username} onChange={(event)=>setusername(event.target.value)}placeholder="LogIn"/>
            <input type="password" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="Password"/>
            <ButtonStyled background ="#6E00FF">Login</ButtonStyled>
            {!token && <Link to= "/register">Not registered yet?</Link>} 
        </AuthStyled>
          
    );
}

export default LoginForm;
