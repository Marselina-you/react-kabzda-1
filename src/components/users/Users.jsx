import React from "react";
import Button from "../button/Button";
import s from './Users.module.css'

const Users = (props) => {
   if (props.users.length === 0) {
    props.setUsers([
        {id: 1, followed: true, photoUrl: 'https://avatars.mds.yandex.net/i?id=329d6c88647606afb886ceb33b34c8379fe6ba0a-10727636-images-thumbs&n=13', fullName: 'Dmitro', status: 'I am Boss', location: {
              city: 'Minsk',
              country: 'Belarus'
          }},
          {id: 2, followed: true, photoUrl: 'https://avatars.mds.yandex.net/i?id=329d6c88647606afb886ceb33b34c8379fe6ba0a-10727636-images-thumbs&n=13', fullName: 'Dana', status: 'I am  not Boss', location: {
              city: 'Murmansk',
              country: 'Russia'
          }},
          {id: 3, followed: false, photoUrl: 'https://avatars.mds.yandex.net/i?id=329d6c88647606afb886ceb33b34c8379fe6ba0a-10727636-images-thumbs&n=13', fullName: 'Don', status: 'I am Boss too', location: {
              city: 'Moskow',
              country: 'Russia'
          }}
      ])
   }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.img}>
              <img src={u.photoUrl} alt="" />
            </div>
            <div>
               
              
              {u.followed 
              ? 
              <Button addMessage={() => {props.unfollow(u.id)}} value="unfollow"/>
              : 
              <Button addMessage={() => {props.follow(u.id)}} value="follow"/>
             }
            </div>
          </span>
          <span>
            <span>
                <div>
                    {u.fullName}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
            <span>
            <div>
                    {u.city}
                </div>
                <div>
                    {u.country}
                </div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
