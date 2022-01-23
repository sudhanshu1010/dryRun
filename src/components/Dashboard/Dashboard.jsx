import React from 'react';
import styles from './Dashboard.module.css'
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div className={styles.dashboard_container}>
            <Navbar/>
        </div>
    )
}

export default Dashboard;