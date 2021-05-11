import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccss } from '../Store/Action/LoginAction';
import './Login.css';

function Login() {

    const [loginForm, setLoginForm] = useState({ userName: '', password: '', userId: '' });

    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        console.log(response.profileObj);
        setLoginForm({
            ...loginForm,
            userName: response.profileObj.name,
            userId: response.profileObj.email
        })
        console.log(loginForm);
        dispatch(loginSuccss(loginForm, 'Gmail'));
    }

    const login = () => {
        setLoginForm({
            ...loginForm,
            userId: loginForm.userName
        })
        console.log(loginForm);
        dispatch(loginSuccss(loginForm, 'Application'));
    }

    const handleInputChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="email" className="form-control" name="userName" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
            </div>

            <GoogleLogin
                clientId="809584238866-q4n3hl8kr9leiv8pj08n7b3q8um0d4h2.apps.googleusercontent.com"
                buttonText="Login with Gmail"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

        </div>
    )

}
export default Login;