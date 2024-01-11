import React from 'react';
import put from './put.jpg';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from '../profileStatus/ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>

    }
    return (
        <div>
            <div className={classes.about}>
        <img src={put} alt="about" />
        </div>
        < ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="ph" />
        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.instagram}</div>
        </div>  
        </div>
    );
};


export default ProfileInfo;