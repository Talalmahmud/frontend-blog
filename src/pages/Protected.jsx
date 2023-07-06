import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isAuthenticate, children }) => {
    if (!isAuthenticate) {
        return <Navigate to={"/login"} replace />;
    }
    return children;
};

export default Protected;
