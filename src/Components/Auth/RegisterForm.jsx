import React,{useState} from "react";
import {AuthStyled} from "./AuthStyled";
import {ButtonStyled} from "../CommonStyles/ButtonStyled";
import{registerUser} from "../../redux/registerSlice";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


function RegisterForm() {
    // const registeration =useSelector((state)=>state.registereduser);
    // console.log(registeration);
    const [username, setUserName] = useState("");
    const[password, setPassword]= useState("");
    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const handleRegisterPost =(event)=>{
        event.preventDefault();
        dispatch(registerUser({username:username,password:password }));
    };

   
    return (
        <AuthStyled onSubmit={handleRegisterPost}>
            <div><h1>Sign Up</h1></div>
            <input type="text" placeholder="LogIn" value = {username} onChange={(event)=>setUserName(event.target.value)}/>
            {(username.length < 4 || username.length> 10) && <p>Your username must contain more than 4 and less then 10 characters</p>}
            <input type="password" placeholder="Password" value = {password} onChange={(event)=>setPassword(event.target.value)}/>
            {(password.length < 4 || password.length>10) && <p>Your password must contain more than 4 and less then 10 characters</p>}
            <ButtonStyled background ="#6E00FF" type="submit">Sign up</ButtonStyled>
        </AuthStyled>
    );
}

export default RegisterForm;