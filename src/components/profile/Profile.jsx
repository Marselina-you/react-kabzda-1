import React from 'react';
import Preloader from '../common/preloader/Preloader';


import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>

    }
    return (
        <div className={s.content}>
       <ProfileInfo profile={props.profile}/>

       <MyPostsContainer />
     
               
       </div>
    );
};



export default Profile;