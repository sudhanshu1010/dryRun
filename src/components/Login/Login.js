import React, { useState } from 'react';
import Profile from '../Profile/Profile'
import './Login.css'

const URLlogin = 'http://127.0.0.1:8000/accounts/login'

const Login = ({ childToParent }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    function handleInput() {
        if (!email || !password) alert("Please enter credentials")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        }

        const res = fetch(URLlogin, requestOptions)
            .then((response) => response.json())
            .then(json => {
                setToken(json.token)
            })

            .catch((error) => console.log(error))
    }

    return !token ? (
        <div className="login-form-container">
            <div className="login-form">
                {/* <small className="login-warning">{token ? '' : 'Wrong password!'}</small> */}
                <input className="form-input email" placeholder="Your email?" type="email" autoComplete="on" onChange={e => setEmail(e.target.value)} />
                <input className="form-input password" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                <button className="btn" onClick={() => handleInput()} disabled={!email || !password}>Login</button>
                <h5>New to DryRun? <a href="#" onClick={() => childToParent(false)}>Create Account</a></h5>
            </div>
        </div>
    ) : <Profile token={token} />

    // return <Profile/>
}

export default Login;