import React, { useState } from "react";
import './Signup.css';

const Signup = ({childToParent}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, checkConfirmPass] = useState(false)

    const validateEmail = (email) => {
        const isValid = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        console.log(isValid )
        return isValid;
      };

    function handleInput() {
        console.log(email, username, password, confirmPass)
        if(password !== null && password === confirmPass) {
            alert("both password are same", confirmPass)
        } else {
            alert("Confirm the password again")
            const field = document.querySelector('.confirm-password')
            field.value = ""
        }
    }
    return (
        <div className="signup-container">
            <div className="signup-form">
                <input className="signup-input email" type="email" placeholder="Email" required onChange={e => validateEmail(e.target.value)} />
                <input className="signup-input username" type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
                <input className="signup-input password" type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
                <input className="signup-input confirm-password" type="password" placeholder="Confirm Password" required onChange={e => checkConfirmPass(e.target.value)}/>
                <button className="btn btn-primary" onClick={handleInput}>Register</button>
                <h5>Already have an account? <a href="#" onClick={() => childToParent(true)}>Login</a></h5>

            </div> 
        </div>
    )
}

export default Signup;