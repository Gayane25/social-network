import React from "react";
import { Navigate, Outlet } from "react-router";
import PropTypes from "prop-types";

ProtectedRoute.propTypes = {
    children: PropTypes.object,
    user:PropTypes.object,
    redirectURL:PropTypes.string
};


function ProtectedRoute({children, user, redirectURL="/login"}) {
    if(!user){
        return <Navigate replace to = {redirectURL}/>;
    }
    return  children ? <> {children} </>: <Outlet />;
    
}

export default ProtectedRoute;