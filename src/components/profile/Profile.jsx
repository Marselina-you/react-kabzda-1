import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
       <ProfileInfo />
       <MyPosts posts={props.state} addPost={props.addPost}
        newPostText={props.state.newPostText} updateNewText={props.updateNewText}/>
       </div>
    );
};



export default Profile;