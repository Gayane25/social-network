import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import { Routes, Route } from "react-router";
import "./App.css";  
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Register from "./Pages/Register/Register";
import axios from "axios";
import { useEffect } from "react";
import Post from "./Components/Post/Post";


function App() {


    return (
        <Routes>
            <Route path ="/" element={<ProtectedRoute />}>
                <Route path="/" element={<Home/>} />
                <Route path="/:postId"element={<Post/>}/>
                <Route path ="/profile" element={<Profile />}/> 
                <Route path ="messages" element={ <Messages />}/> 
                <Route path ="/settings" element={<Settings />}/> 
            </Route>
            <Route path ="/login" element={<Login />}/> 
            <Route path ="/register" element={<Register />}/> 
        </Routes>
    );
}

export default App;
