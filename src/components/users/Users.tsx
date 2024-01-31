import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { FilterType } from '../../redux/usersReducer';
import Paginator from '../common/paginator/Paginator';
import { UserType } from '../types/types';
//import s from './Users.module.css';
import User from './User';
import UsersSearchForm from './UsersSearchForm';

type PropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number 
  pageSize: number  
  onFilterChanged: (filter: FilterType) => void
  users: Array<UserType>   
  follow: (userId: number) => void 
  unfollow: (userId: number) => void   
  followingInProgress: Array<number>
}


const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,   ...props}) => {
   
    return (
        <div>
          <div>
<UsersSearchForm onFilterChanged={props.onFilterChanged}/>
          </div>
     <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}/>
      
      {users.map((u) => (
        <User user={u} 
              followingInProgress={props.followingInProgress}
              key={u.id}
              unfollow={props.unfollow} 
              follow={props.follow} 
              />
        
      ))}
    </div>
    );
};

export default Users;
