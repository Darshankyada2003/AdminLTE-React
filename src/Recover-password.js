import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Recoverpassword() {


    useEffect(() => {
        document.title = "Recover-password"
    })

    const [values, setValues] = useState({
        password: '',
        confirmpassword: ''
    })
    const [error, setError] = useState({})
    const [redirectlogin, setRedirectlogin] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const valid = {}

        if (values.password === "") {
            valid.password = "Enter the Password"
        } else if (values.password.length < 6) {
            valid.password = "Password should be at least 6 char"
        }

        if (values.confirmpassword === "") {
            valid.confirmpassword = "Enter the ConfirmPassword"
        } else if (values.confirmpassword !== values.password) {
            valid.confirmpassword = "Password do not match"
        }

        setError(valid);
        if (Object.keys(valid).length === 0) {
            console.log("Password change successfully");
            setRedirectlogin(true);
        }
    }
    if (redirectlogin) {
        return <Navigate to="/login" />
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

                        <form onSubmit={handlesubmit}>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" autoComplete="new-password" value={values.password} name="password" onChange={handlechange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    {error.password && <span className="text-danger"><small>{error.password}</small></span>}
                                </div>
                            </div>
                            <br />
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Confirm Password" autoComplete="new-password" value={values.confirmpassword} name="confirmpassword" onChange={handlechange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    {error.confirmpassword && <span className="text-danger"><small>{error.confirmpassword}</small></span>}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Change password</button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-3 mb-1">
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recoverpassword