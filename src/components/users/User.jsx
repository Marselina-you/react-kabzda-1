import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import s from './Users.module.css'
import userImg from '../../assets/images/user.jpg';

type PropsType = {
  
}

const User = ({user, followInProgress, unfollow, follow}) => {
    
    return (
        <div>
          <span>
            <div className={s.img}>
              <Link to={`/profile/${user.id}`}>
              <img src={ user.photos.small || userImg} alt="" />
              </Link>
             </div>
            <div>
            {user.followed 
              ? 
              <Button value="unfollow"  disabled={followInProgress.some(id => id === user.id)}
              addMessage={() => {
                unfollow(user.id)
            }} />
            
              : 
              <Button value="follow"  disabled={followInProgress.some(id => id === user.id)}
              addMessage={() => {
                follow(user.id)
            }} />
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
               
            </span>
          </span>
        </div>
    );
};



export default User;