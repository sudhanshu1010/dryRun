import React from 'react';
import styles from './Userprofile.module.css'

const tempProfile = 'https://firebasestorage.googleapis.com/v0/b/dryrun-f46f2.appspot.com/o/images%2Fsid2%40gmail.io33%2F1642267878873.jpg?alt=media&token=6591e22d-f88b-43d4-8c52-31ba7be2fafd'

const Userprofile = () => {
    return (
        <div className={styles.userprofile_main_container}>
            <div className={styles.userprofile_image_container}>
                <img src={tempProfile} />
            </div>
            <div className={styles.userprofile_name_container}>Sudhanshu Kumar</div>
            <div className={styles.userprofile_about_container}>
                <p>Looking forward to the opportunities in immigration and consulting firms.
                    Ready to serve as IELTS Trainer with utmost confidence and required set of skills.</p>
            </div>
            <div className={styles.userprofile_details_container}></div>

        </div>
    )
}

export default Userprofile;