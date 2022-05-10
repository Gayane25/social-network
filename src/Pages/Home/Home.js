import React from "react" ;
import { Navigate } from "react-router";

function Home({user}) {
    if(!user){
        return <Navigate replace to = '/login'/>
    }
    return (
        <div>Home</div> 
    );
}

export default Home;