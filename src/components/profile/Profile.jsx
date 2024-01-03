import React from 'react';


import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={s.content}>
       <ProfileInfo />

       <MyPostsContainer />
     
               
       </div>
    );
};



export default Profile;