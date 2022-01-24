import React, { useState } from 'react';
import styles from './Navbar.module.css'
import Logo from '../../Images/Logo.png'

const tempProfile = 'https://firebasestorage.googleapis.com/v0/b/dryrun-f46f2.appspot.com/o/images%2Fsid2%40gmail.io33%2F1642267878873.jpg?alt=media&token=6591e22d-f88b-43d4-8c52-31ba7be2fafd'

const Navbar = ({ getButtonClicked }) => {

    function handleHome() {
        alert('Welcome home')
    }

    return (
        <div className={styles.navbar_container}>
            <div className={styles.logo_container} title='Dryrun your coding buddy' onClick={handleHome}>
                <img src={Logo} />
            </div>
            <div className={styles.navbar_links_container}>
                <a href="#" onClick={() => getButtonClicked(1)}>Problem</a>
                <a href="#" onClick={() => getButtonClicked(2)}>Explore</a>
                <div className={styles.profile_main_container} onClick={() => getButtonClicked(3)}>
                    <a href="#">Profile</a>
                    <div className={styles.profile_image_container}>
                        <img src={tempProfile} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;