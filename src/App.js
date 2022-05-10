import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";  
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";


function App() {
    const [user, setUser] = useState("someName");
    return (
        <Routes>
            <Route path ="/" element={<ProtectedRoute user={user} />}>
                <Route path="/" element={<Home/>} />
                <Route path ="/profile" element={<Profile />}/> 
                <Route path ="messages" element={ <Messages />}/> 
                <Route path ="/settings" element={<Settings />}/> 
            </Route>
            <Route path ="/login" element={<Login />}/> 
        </Routes>
    );
}

export default App;