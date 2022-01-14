import React, { useState } from 'react'
import axios from 'axios'
import './Profile.css'

const URL = 'http://127.0.0.1:8000/accounts/profile'

const Profile = ({ token }) => {
    const [data, setData] = useState(null)

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Token 52aee1d3b4e2c2a1041b59a9fdd38140da4b5583'       
            // 'Authorization': 'Token ' + token
        }
    }

    // const res = (fetch(URL, requestOptions)
    //     .then((response) => response.json())
    //     .then(json => {
    //         // setMyData(json)
    //         // for(var i in json){
    //         //     console.log(json[i])
    //         // }
    //         data = json;
    //         console.log(data.name)
    //         console.log('received data is', json)
    //     })
    //     .catch((error) => console.log(error)))

    const res = axios.get(URL, requestOptions).then((response) => response.json()).then(json => console.log(json))
    // console.log(res.json())
        

    return (
        <div className="profile-container">
            {/* <h6>Email: {data.email}</h6> */}
        </div>
    )
}

export default Profile;