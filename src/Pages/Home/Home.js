import React from "react" ;
import { Link } from "react-router-dom";

function Home() {
   
    return (
        <div>
            <h2>Home</h2>
            <Link to= "/messages">Messages</Link>
            <Link to ="/profile">Profile</Link>
            <Link to="Settings">Settings</Link>
        </div> 
    );
}



export default Home;