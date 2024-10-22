import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";



function Login({ setIsuserlogin }) {

    useEffect(() => {
        document.title = "Login";
        document.body.className = "login-page";
        return () => { document.body.className = "sidebar-mini"; }
    }, [])

    const [values, setValues] = useState({
        email: '',
        password: '',
        rememberme: false
    })
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const [alert, setAlert] = useState(null);
    const [show, setShow] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        })
    }

    const handleClick = () => {
        setShow(!show)
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        let validation = {}


        if (values.email === "") {
            validation.email = "Enter the Email"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            validation.email = "Email is not valid"
        }

        if (values.password === "") {
            validation.password = "Enter the Password"
        } else if (values.password.length < 6) {
            validation.password = "Password should be at least 6 char"
        }

        setError(validation);

        if (Object.keys(validation).length === 0) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, values)
                .then(res => {
                    if (res.data.status) {
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user", JSON.stringify(res.data.user))
                        setIsuserlogin(true);
                        navigate("/dashboard")
                    } else {
                        setAlert({
                            message: res.data.message,
                            variant: "success"
                        })
                    }
                })
                .catch(err => {
                    console.log(err);
                    setAlert({
                        message: err.response.data.message,
                        variant: "danger"
                    })
                })
            console.log("Successfully login");
        }
    }

    return (

        <div className="login-box">
            <div className="login-logo">
                <a href=""><b>Admin</b>LTE</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    {alert && (
                        <Alert variant={alert.variant}>
                            {alert.message}
                        </Alert>
                    )}
                    <form onSubmit={handlesubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" name="email" placeholder="Email" autoComplete="username" value={values.email} onChange={handlechange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                            <div className="input-group">
                                {error.email &&
                                    <span className="text-danger"><small>{error.email}</small></span>
                                }
                            </div>
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type={show ? 'text' : 'password'} className="form-control" placeholder="Password" name="password" value={values.password} onChange={handlechange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span
                                        style={{
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: 'transparent',
                                            padding: 0
                                        }}
                                        onClick={handleClick}>
                                        {show ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </span>
                                </div>
                            </div>
                            <div className="input-group">
                                {error.password && <span className="text-danger"><small>{error.password}</small></span>}
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="https://www.facebook.com/" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="https://accounts.google.com/" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div>
                    <br />

                    <p className="mb-1">
                        <Link to="/forgot-password">I forgot my password</Link>
                    </p>
                    <p className="mb-0">
                        <Link to="/registration" className="text-center">Register a new membership</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Login