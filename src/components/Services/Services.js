import React, {useState} from 'react';
import axios from 'axios';

const loginURL = 'http://127.0.0.1:8000/accounts/login'
const updateProfileURL = 'http://127.0.0.1:8000/accounts/update'
const registerURL = 'http://127.0.0.1:8000/accounts/register'
const getProfileURL = 'http://127.0.0.1:8000/accounts/profile'

export const loginResponse = ({ email, password }) => {
    const [token, setToken] = useState('')

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    }

    const res = fetch(loginURL, requestOptions)
        .then((response) => response.json())
        .then(json => {
            console.log(json.token)
            setToken(json.token)
        })

        .catch(() => {
            setPasswordError(true)
        })
}

export const profileResponse = () => {}

export const resgisterResponse = () => {}

export const updateProfileResponse = () => {}