import React, { useState } from 'react'
import './Profile.css'

const URL = 'http://127.0.0.1:8000/accounts/profile'

const Profile = ({ token }) => {
    const [myData, setMyData] = useState('')

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Token ' + token
        }
    }

    const res = fetch(URL, requestOptions)
        .then((response) => response.json())
        .then(json => {
            // setMyData(json)
            // for(var i in json){
            //     console.log(json[i])
            // }
            console.log(json)
        })
        .catch((error) => console.log(error))

    return (
        <div className="profile-container">
            Details {myData}
        </div>
    )
}

export default Profile;