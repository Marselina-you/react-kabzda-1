import React from 'react';
import Paginator from '../common/paginator/Paginator';
import { UserType } from '../types/types';
//import s from './Users.module.css';
import User from './User';

type PropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number 
  pageSize: number  
  users: Array<UserType>   
  follow: (userId: number) => void 
  unfollow: (userId: number) => void   
  followingInProgress: Array<number>
}


const Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, followingInProgress,   ...props}) => {
   
    return (
        <div>
     <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}/>
      
      {users.map((u) => (
        <User user={u} key={u.id}
              followingInProgress={followingInProgress}
              unfollow={unfollow} 
              follow={follow} 
              />
        
      ))}
    </div>
    );
};



export default Users;
