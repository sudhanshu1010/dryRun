import React from 'react';
import styles from './Dashboard.module.css'
import Navbar from './Navbar'

const Dashboard = () => {
    const [problem, setProblem] = useState(false)
    const [explore, setExplore] = useState(false)
    const [profile, setProfile] = useState(false)

    const getProperties = ({problem, explore, profile }) => {
        setProblem(problem)
        setExplore(explore)
        setProfile(profile)
    }

    function myFunction(){
        console.log(problem, explore, profile)
    }
    return (
        <div className={styles.dashboard_container}>
            <Navbar getProperties={problem, explore, profile}/>
            <button onClick={myFunction}>Click here</button>
        </div>
    )
}

export default Dashboard;