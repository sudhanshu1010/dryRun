import React from 'react'
import styles from './Profile.module.css'
import Userprofile from '../User/Userprofile'

const Profile = () => {
    return (
        <div className={styles.profile_main_container}>
            <Userprofile/>
        </div>
    )
}

export default Profile;