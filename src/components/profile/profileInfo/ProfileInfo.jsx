import React from 'react';
import put from './put.jpg';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
//import ProfileStatus from '../profileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../profileStatus/ProfileStatusHooks';
import ImgPhoto from '../../../assets/images/chef.jpg';
import { useState } from 'react';
import Button from '../../button/Button';

import ProfileDataFormRedux from '../../common/formControls/ProfileDataForm';




const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            
            savePhoto(e.target.files[0]) 
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {setEditMode(false);});
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
        { editMode ? <ProfileDataFormRedux initialValues={profile} 
                                           onSubmit={onSubmit}
                                           profile={profile}
                                           /> 
        : <ProfileData profile={profile}
                       isOwner={isOwner} 
                       goToEditMode={()=> {setEditMode(true)}}/>}
            </div>  
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <>
    {isOwner && <div><Button value="edit" addMessage={goToEditMode}/></div>}
        <div className={classes.fullName}>{profile.fullName}</div>
        <div><b className={classes.name}>job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
       {profile.lookingForAJob &&
        <div className={classes.name}>My professional skills:{profile.lookingForAJobDesription }</div>
       }
       <div>
        <b className={classes.name}>About me:</b>{profile.aboutMe}
       </div>
       <div>
        <b className={classes.name}>Contacts:</b>{Object.keys(profile.contacts).map(key => {
             return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
       </div>
    </>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;