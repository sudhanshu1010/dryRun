import React, { useState } from 'react';
import './Login.css'

const URL = 'http://127.0.0.1:8000/accounts/login'

const Login = ( {childToParent}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if(!email && !password){
        const btn = document.querySelector('.btn')
        btn.style.cursor = 'default'
        btn.style.background = '#797E8B'
    }


    function handleInput(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        }
        
        const res = fetch(URL, requestOptions)
        .then((response) => response.json())
        .then(json => console.log(json))
        .catch((error) => console.log(error))

        console.log('token', res.token)

    }

    return (
        <div className="login-form-container">
            <div className="login-form">
                <input className="form-input email" placeholder="Your email?" type="email" onChange={e => setEmail(e.target.value)}/>
                <input className="form-input password" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                <button className="btn" onClick={() => handleInput()} disabled={!email || !password}>Login</button>
                <h5>New to DryRun? <a href="#" onClick={() => childToParent(false)}>Create Account</a></h5>
            </div>
        </div>
    );
}

export default Login;