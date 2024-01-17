import React from 'react';
import put from './put.jpg';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
//import ProfileStatus from '../profileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../profileStatus/ProfileStatusHooks';
import ImgPhoto from '../../../assets/images/chef.jpg';


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>

    }
    return (
        <div>
            <div className={classes.about}>
        <img src={put} alt="about" />
        </div>
        < ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={classes.descriptionBlock}>
        <img  src={ profile.photos.large != null ? profile.photos.smal : ImgPhoto}alt="user's_photo" />
        <div>{profile.fullName}</div>
        <div>{profile.contacts.instagram}</div>
        </div>  
        </div>
    );
};


export default ProfileInfo;