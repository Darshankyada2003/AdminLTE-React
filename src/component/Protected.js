import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({isuserlogin}) => {
    return isuserlogin ? <Outlet /> : <Navigate to="/login"/>
}

export default Protected