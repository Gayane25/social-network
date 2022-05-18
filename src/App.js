import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";  
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Register from "./Pages/Register/Register";



function App() {
   
    const [user, setUser] = useState({userId:123456,
        useName: "Red"});
    // useEffect(()=>{
    //     fetch("http://localhost:5000/api/posts").then(resp=>resp.json()).then((response)=>console.log(response));
    // },[]);
    return (
        <Routes>
            <Route path ="/" element={<ProtectedRoute user={user} />}>
                <Route path="/" element={<Home user ={user}/>} />
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
