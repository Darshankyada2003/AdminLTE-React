import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';

function Registration() {

    useEffect(() => {
        document.title = "Registration"
    })

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        agree: false
    })
    const [error, setError] = useState({});
    //  const navigate = useNavigate();
    const [alert, setAlert] = useState(null);

    const handlechange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        const validError = {}

        if (values.name === "") {
            validError.name = " Enter the Fullname "
        }
        if (values.email === "") {
            validError.email = "Enter the Email"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            validError.email = "Email is not valid"
        }
        if (values.password === "") {
            validError.password = "Enter the Password"
        } else if (values.password.length < 6) {
            validError.password = "Password should be at least 6 char"
        }
        // if (values.confirmpassword === "") {
        //     validError.confirmPassword = "Retype the Password";
        // } else if (values.confirmpassword !== values.password) {
        //     validError.confirmPassword = "Passwords do not match";
        // }
        setError(validError);

        if (Object.keys(validError).length === 0) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`, values)
                .then(res => {
                    if (res.data.status) {
                        console.log(res.data.message);
                        setAlert({
                            message: res.data.message,
                            variant: "success"
                        });
                    }
                })
                .catch(err => {
                    if (err.response && err.response.data) {
                        setAlert({
                            message: err.response.data.message,
                            variant: "danger"
                        })
                    }
                });
        } else {
            setAlert(null);
        }
    }
    return (

        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href=""><b>Admin</b>LTE</a>
                </div>

                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        {alert && (
                            <Alert variant={alert.variant}>
                                {alert.message}
                            </Alert>
                        )}

                        <form onSubmit={handlesubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" name="name" value={values.name} onChange={handlechange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    {error.name && <span className="text-danger"><small>{error.name}</small></span>}
                                </div>
                            </div>
                            <br />
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" name="email" value={values.email} autoComplete="username" onChange={handlechange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    {error.email && <span className="text-danger"><small>{error.email}</small></span>}
                                </div>
                            </div>
                            <br />
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" name="password" value={values.password} autoComplete="current-password" onChange={handlechange} />
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
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="">terms</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="https://www.facebook.com/" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2 fa-react"></i>
                                Sign up using Facebook
                            </a>
                            <a href="https://accounts.google.com/" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i>
                                Sign up using Google+
                            </a>
                        </div>

                        <Link to="/login" className="text-center">I already have a membership   </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration