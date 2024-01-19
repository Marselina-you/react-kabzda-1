import React from 'react';
import put from './put.jpg';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
//import ProfileStatus from '../profileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../profileStatus/ProfileStatusHooks';
import ImgPhoto from '../../../assets/images/chef.jpg';




const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>

    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            
            savePhoto(e.target.files[0]) 
        }
    }
    return (
        <div>
            <div className={classes.about}>
        <img src={put} alt="about" />
        </div>
        < ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={classes.descriptionBlock}>
        <img  alt="userphoto"  src={profile.photos.large || ImgPhoto} />
        { isOwner && <input type={"file"} onChange={ onMainPhotoSelected}/>}
        <div>{profile.fullName}</div>
        <div  className={classes.name}>vk:{profile.contacts.vk}</div>
        <div  className={classes.name}>job:{profile.lookingForAJob}</div>
       
        </div>  
        </div>
    );
};


export default ProfileInfo;