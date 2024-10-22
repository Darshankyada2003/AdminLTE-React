import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Forgotpassword from "./Forgot-password";
import Recoverpassword from "./Recover-password";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Protected from "./Protected";
import Public from "./Public";

function App() {

  const [isuserlogin, setIsuserlogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsuserlogin(!!token);
  })

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Protected isuserlogin={isuserlogin} />}>
          <Route path="/dashboard" element={<Dashboard setIsuserlogin={setIsuserlogin} />} />
        </Route>

        <Route element={<Public isuserlogin={isuserlogin} />}>
          <Route path="/login" element={<Login setIsuserlogin={setIsuserlogin}/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/recoverpassword" element={<Recoverpassword />} />
        </Route>

        <Route path="/admin" element={<Admin />} />     

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App