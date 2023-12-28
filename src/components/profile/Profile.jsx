import React from 'react';
import about from './about.png'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
       
        <div className={s.about}>
        <img src={about} alt="about" />
        </div>
        <div className={s.chef}>
         
        </div>
       
       
        <MyPosts />
       </div>
    );
};



export default Profile;