import React, { useState } from "react";
import Logo from '../../Images/Logo.png'

import buttonCSS from '../../components/Button/Button.module.css'
import styles from './Signup.module.css'

const Signup = ({ childToParent }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [wrongPassword, setWrongPassword] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [showPassword, setShowpassword] = useState(false)

    function togglePassword() {
        showPassword === true ? setShowpassword(false) : setShowpassword(true);
    }

    const validateEmail = (email) => {
        const isValid = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (isValid) {
            setEmailError(false)
            setEmail(email)

        } else if (!isValid) {
            setEmailError(true)
        }
    };

    function checkPassword(data) {
        if(password !== data){
            console.log(wrongPassword)
            setWrongPassword(false)
        } else setWrongPassword(true)
    }


    function handleInput() {
        console.log(email, !email)
        console.log(username, !username)
        console.log(password, !password)
        console.log(wrongPassword, !wrongPassword)
    }

    const isDisabledButtonTrue = {
        background: 'rgb(163, 163, 163)',
        cursor: 'not-allowed'
    }

    const isDisabledButtonFalse = {}

    return (
        <div className={styles.signup_container}>
            <div className={styles.logo_container}>
                <img src={Logo} />
            </div>
            <div className={styles.signup_form}>
                <h2>Sign up</h2>

                <div className={styles.email_container}>
                    <input type="text"
                        className={styles.form_input}
                        placeholder="Your email..."
                        onChange={e => validateEmail(e.target.value)}
                    />
                    <small className={styles.email_error, styles.error}>{emailError ? 'Enter valid email address!' : ''}</small>
                </div>

                <div className={styles.username_container}>
                    <input type="text"
                        className={styles.form_input}
                        placeholder="Username..."
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.password_container}>
                    <input className={styles.form_input}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span onClick={togglePassword}>{showPassword ? 'Hide' : 'Show'}</span>
                </div>

                <div className={styles.password_container}>
                    <input className={styles.form_input}
                        type="password"
                        placeholder="Confirm password..."
                        onChange={e => checkPassword(e.target.value)}
                    />
                    <small className={styles.error}>{wrongPassword ? '' : "Password doesn't match"}</small>
                </div>

                <button className={buttonCSS.btn}
                    onClick={() => handleInput()}
                    // disabled={!email || !password || !username || confirmPass}
                    style={(email && username && password && wrongPassword) ? isDisabledButtonTrue : isDisabledButtonFalse  }
                >Register</button>

                <h5>Already have an account? <a href="#" onClick={() => childToParent(true)}>Login</a></h5>
            </div>
        </div>
    )
}

export default Signup;