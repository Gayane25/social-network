import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";  


function App() {
    const [user, setUser] =useState("");
    return (
        <Routes>
            <Route path ='/' element={<Home user = {user}/>}/> 
            <Route path ='/login' element={<Login />}/> 
            <Route path ='/profile' element={ <Profile />}/> 
            <Route path ='/messages' element={ <Messages />}/> 
            <Route path ='/settings' element={<Settings />}/> 
        </Routes>
    );
}

export default App;