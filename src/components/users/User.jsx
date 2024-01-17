import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import s from './Users.module.css'
import userImg from '../../assets/images/user.jpg';

const User = ({user, followInProgress, unfollow, follow}) => {
    
    return (
        <div>
          <span>
            <div className={s.img}>
              <Link to={`/profile/${user.id}`}>
              <img src={ user.photos.small != null ? user.photos.smal : userImg} alt="" />
              </Link>
             </div>
            <div>
            {user.followed 
              ? 
              <button disabled={followInProgress.some(id => id === user.id)}
                      onClick={() => {
                          unfollow(user.id)
                      }}>Unfollow</button>
              : 
              <button disabled={followInProgress.some(id => id === user.id)}
              onClick={() => {
                  follow(user.id)
              }}>Follow</button>
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
            <div className={s.id}>
                    {user.id}
                </div>
                <div>
                {user.followed ? <span><Button addMessage={() => {
                          unfollow(user.id)
                      }}  value="true:unfollow"/></span> : <span><Button  addMessage={() => {
                        follow(user.id)
                    }} value="false:follow"/></span>}
                </div>
            </span>
          </span>
        </div>
    );
};



export default User;