import React, { useState } from 'react';
import Navbar from './Navbar'
import Profile from '../Profile/Profile'
import styles from './Dashboard.module.css'

const Dashboard = () => {
    const [problem, setProblem] = useState(false)
    const [explore, setExplore] = useState(false)
    const [profile, setProfile] = useState(false)

    const getButtonClicked = (numberCount) => {
        if(numberCount == 1){
            setProblem(true)
            setProfile(false)
            setExplore(false)

        } else if(numberCount == 2){
            setExplore(true)
            setProfile(false)
            setProblem(false)
            
        } else {
            setProfile(true)
            setProblem(false)
            setExplore(false)
        }
    }

    return (
        <div className={styles.dashboard_container}>
            <Navbar getButtonClicked={getButtonClicked} className={styles.navbar_container} />
            {
                profile ? <div className={styles.dashboard_content_container}>
                <div className={styles.dashboard_left_container}>
                    <div className={styles.dashboard_questions}></div>
                    <div className={styles.dashboard_yearlydata}></div>
                    <div className={styles.dashboard_recent_submissions}></div>
                </div>
                <div className={styles.dashboard_right_container}>
                    <Profile className={styles.profile_container}/>
                </div>
            </div>: 'General Section'
            }
        </div>
    )
}

export default Dashboard;