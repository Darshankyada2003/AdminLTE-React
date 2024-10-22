import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Public = ({ isuserlogin }) => {
    return !isuserlogin ? <Outlet /> : <Navigate to="/dashboard" />
}

export default Public