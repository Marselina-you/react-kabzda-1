import React from 'react';
import put from './put.jpg'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.about}>
        <img src={put} alt="about" />
        </div>
        <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="about" />
        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.instagram}</div>
        </div>  
        </div>
    );
};


export default ProfileInfo;