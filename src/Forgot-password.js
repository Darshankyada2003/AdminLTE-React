import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Forgotpassword() {

    useEffect(() => {
        document.title = "Forgot-Password"
    })

    const [email, setEmail] = useState({
        email: ''
    })
    const [error, setError] = useState({})
    const [recoverpassword, setRecoverpassword] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setEmail({
            ...email, [name]: value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        let error = {}

        if (email.email === "") {
            error.email = "Enter the Email"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.email)) {
            error.email = "Email is not valid"
        }
        setError(error);
        if (Object.keys(error).length === 0) {
            console.log("Create new password");
            setRecoverpassword(true)
        }
    }

    if (recoverpassword) {
        return <Navigate to="/recoverpassword" />
    }
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                        <form onSubmit={handlesubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" name="email" value={email.email} onChange={handlechange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    {error.email && <span className="text-danger">{error.email}</span>}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-3 mb-1">
                            <Link to="/login">Login</Link>
                        </p>
                        <p className="mb-0">
                            <Link to="/registration" className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forgotpassword