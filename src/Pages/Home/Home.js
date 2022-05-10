import React from "react" ;
import { Navigate } from "react-router";
import PropTypes from "prop-types";

Home.propTypes = {
    user: PropTypes.string
};

function Home(user) {
    if(!user){
        return <Navigate replace to = '/login'/>;
    }
    return (
        <div>Home</div> 
    );
}



export default Home;