import React, {useState} from 'react';
import axios from 'axios';

const loginURL = 'http://127.0.0.1:8000/accounts/login'
const updateProfileURL = 'http://127.0.0.1:8000/accounts/update'
const registerURL = 'http://127.0.0.1:8000/accounts/register'
const getProfileURL = 'http://127.0.0.1:8000/accounts/profile'

export const loginResponse = () => {}

export const profileResponse = () => {}

export const resgisterResponse = () => {}

export const updateProfileResponse = () => {}

export const validateEmail = () => {}