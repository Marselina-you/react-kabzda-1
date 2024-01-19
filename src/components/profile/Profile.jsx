import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
   
    return (
        <div className={s.content}>
       <ProfileInfo 
       savePhoto = {props.savePhoto}
       isOwner={props.isOwner}
       profile={props.profile} 
       status={props.status} 
       saveProfile={props.saveProfile}
       updateStatus={props.updateStatus}/>

       <MyPostsContainer />
     
               
       </div>
    );
};



export default Profile;