import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from "./AuthContext";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
    let {user} = useContext(AuthContext)

    console.log(user)

    if (user === null) {
        return <Navigate to="/" />;
    }
    return <Route {...rest} />;
};

export default PrivateRoute;
