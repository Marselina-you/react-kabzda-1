import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';
import s from './Users.module.css'
import userImg from '../../assets/images/user.jpg';

const User = ({user, followInProgress, unfollow, follow}) => {
    
    return (
        <div>
          <span>
            <div className={s.img}>
              <NavLink to={`/profile/${user.id}`}>
              <img src={ user.photos.small != null ? user.photos.smal : userImg} alt="" />
              </NavLink>
             </div>
            <div>
            {user.followed 
              ? 
              <Button disabled={followInProgress.some(id => id === user.id)} addMessage={() => {
               unfollow(user.id)}} value="unfollow"/>
              : 
              <Button disabled={followInProgress.some(id => id === user.id)} addMessage={() => {
                follow(user.id)}} value="follow"/>
             }
            </div>
          </span>
          <span>
            <span>
                <div>
                    {user.name}
                </div>
                <div className={s.status}>
                    {user.status}
                </div>
            </span>
            <span>
            <div>
                    {'user.city'}
                </div>
                <div>
                    {'user.country'}
                </div>
            </span>
          </span>
        </div>
    );
};



export default User;