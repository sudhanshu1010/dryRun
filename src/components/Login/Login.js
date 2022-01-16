import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Logo from '../../Images/Logo.png'
import './Login.css'

const URLlogin = 'http://127.0.0.1:8000/accounts/login'
const logoUrl = '../../../Images/Logo.png'


const Login = ({ childToParent }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const [showPassword, setShowpassword] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const validateEmail = (email) => {
        const isValid = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (isValid) {
            setEmailError(false)
            setEmail(email)
        } else {
            setEmailError(true)
        }
        return isValid;
    };

    function togglePassword() {
        showPassword === true ? setShowpassword(false) : setShowpassword(true);
    }

    function handleInput() {
        const isValid = validateEmail(email);

        if (!isValid) {
            alert("enter correct email and pass")
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        }

        const res = fetch(URLlogin, requestOptions)
            .then((response) => response.json())
            .then(json => {
                console.log(json.token)
                setToken(json.token)
            })

            .catch(() => {
                setPasswordError(true)
            })
    }

    return !token ? (
        <div className="login-form-container">
            <div className="logo-container">
                <img src={Logo} />
            </div>

            <div className="login-form">
                <h2>Sign In</h2>

                <div className="email-container">
                    <input type="text" className="form-input email" placeholder="Your email" onChange={e => validateEmail(e.target.value)} />
                    <small className="email-error error">{emailError ? 'Enter valid email address!' : ''}</small>
                </div>

                <div className="password-container">
                    <input type={showPassword ? 'text' : 'password'} className="form-input password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <span onClick={togglePassword}>{showPassword ? 'Hide' : 'Show'}</span>
                    <small className="password-error error">{passwordError ? 'Wrong password' : ''}</small>
                </div>

                <button className="btn"
                    onClick={() => handleInput()}
                    disabled={!email || !password}
                    style={(!email || !password) ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
                >Login</button>
                <h5>Don't have an Account? <a href="#" onClick={() => childToParent(false)} title="Make a new account">Register Now</a></h5>

            </div>
        </div>
    ) :
        <Dashboard token={token} />

    // return <Dashboard/>
}

export default Login;