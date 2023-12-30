import React from 'react';
import put from './put.jpg'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.about}>
        <img src={put} alt="about" />
        </div>
        <div className={classes.descriptionBlock}>
         
        </div>  
        </div>
    );
};


export default ProfileInfo;