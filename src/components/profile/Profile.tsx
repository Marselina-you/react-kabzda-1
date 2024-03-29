import React from 'react';
import { ProfileType } from '../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
 type PropsType = {
       savePhoto: (file: File) => void
       isOwner: boolean
       profile: ProfileType | null
       status: string
       saveProfile: (profile: ProfileType) => Promise<any>
       updateStatus: (status: string) => void
 }

const Profile: React.FC<PropsType> = (props) => {
   
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