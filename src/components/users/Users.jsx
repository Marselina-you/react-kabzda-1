import React from 'react';
import Button from '../button/Button';
import s from './Users.module.css';
import user from "../../assets/images/user.jpg";
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100);
  
  let pages = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push(i);
  }

    return (
        <div>
        <div className={s.page}>
{pages.map( p => {
  return <span key={p} className={props.currentPage === p ? s.selectedPage : undefined }
  onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
})}
</div>
      
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.img}>
              <NavLink to={`/profile/${u.id}`}>
              <img src={ u.photos.small != null ? u.photos.smal : user} alt="" />
              </NavLink>
             </div>
            <div>
            {u.followed 
              ? 
              <Button disabled={props.followInProgress.some(id => id === u.id)} addMessage={() => {
               props.unfollow(u.id)}} value="unfollow"/>
              : 
              <Button disabled={props.followInProgress.some(id => id === u.id)} addMessage={() => {
                props.follow(u.id)}} value="follow"/>
             }
            </div>
          </span>
          <span>
            <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
            <span>
            <div>
                    {'u.city'}
                </div>
                <div>
                    {'u.country'}
                </div>
            </span>
          </span>
        </div>
      ))}
    </div>
    );
};



export default Users;
/*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "0d22077a-fb97-4dd0-9851-e99421b7879d"
                  }
                }).then(responce => {
                  if (responce.data.resultCode === 0) {
                    props.unfollow(u.id)
                  }
                 
                  });*/