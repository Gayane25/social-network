import React from "react";
import { Navigate, Outlet } from "react-router";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

ProtectedRoute.propTypes = {
    children: PropTypes.object,
    user:PropTypes.object,
    redirectURL:PropTypes.string
};


function ProtectedRoute({children, user, redirectURL="/login"}) {
    const isAuth = useSelector((state)=>state.logUser.isAuth);
    if(!isAuth){
        return <Navigate replace to = {redirectURL}/>;
    }
    return  children ? <> {children} </>: <Outlet />;
    
}

export default ProtectedRoute;