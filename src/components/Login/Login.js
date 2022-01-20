import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Logo from '../../Images/Logo.png'
import buttonCSS from '../Button/Button.module.css'

import styles from './Login.module.css';

const URLlogin = 'http://127.0.0.1:8000/accounts/login'

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
            headers: {
                'Content_Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
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

    const isDisabledButtonTrue = {
        background: 'rgb(163, 163, 163)',
        cursor: 'not-allowed'
    }

    const isDisabledButtonFalse = {}

    return !token ? (
        <div className={styles.login_form_container}>
            <div className={styles.logo_container}>
                <img src={Logo} />
            </div>

            <div className={styles.login_form}>
                <h2>Sign in</h2>

                <div className={styles.login_form_input}>
                    <input type="text"
                        className={styles.form_input}
                        placeholder="Your email..."
                        onChange={e => validateEmail(e.target.value)}
                    />
                    <small className={styles.email_error, styles.error}>{emailError ? 'Enter valid email address!' : ''}</small>
                </div>

                <div className={styles.password_container, styles.login_form_input}>
                    <input className={styles.form_input}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span onClick={togglePassword}>{showPassword ? 'Hide' : 'Show'}</span>
                    <small className={styles.password_error, styles.error}>{passwordError ? 'Wrong password!' : ''}</small>
                </div>

                <button className={buttonCSS.btn}
                    onClick={() => handleInput()}
                    disabled={!email || !password}
                    // style={(!email || !password) ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
                    style={(!email || !password) ? isDisabledButtonTrue : isDisabledButtonFalse}
                >Login</button>
                <h5>Don't have an Account? <a href="#" onClick={() => childToParent(false)} title="Make a new account">Register Now</a></h5>

            </div>
        </div>
    ) :
        <Dashboard token={token} />

    // return <Dashboard/>
}

export default Login;