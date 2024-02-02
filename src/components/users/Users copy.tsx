import React, { useEffect } from 'react';
import { FilterType,  requestUsers, followReducer, unfollowReducer} from '../../redux/usersReducer';
import Paginator from '../common/paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentPage, getPageSize, getUsers, getUsersFilter, getUsersTotalCount, getFollowInProgress } from '../../redux/users-selectors';
import { TypeDispatch } from '../../redux/redux-store';
type PropsType = {
    
}


 export const Users: React.FC<PropsType> = (props) => {
  const users = useSelector(getUsers)
   const totalUsersCount =  useSelector(getUsersTotalCount);
   const currentPage =  useSelector(getCurrentPage);
   const pageSize =  useSelector(getPageSize);
   const filter =  useSelector(getUsersFilter);
   const followingInProgress = useSelector(getFollowInProgress)
   const dispatch =  useDispatch<TypeDispatch>();
   
   const onPageChanged =  (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {
  dispatch(requestUsers(1, pageSize, filter))
}
const follow = (userId: number) => {
  dispatch(followReducer(userId))
}

const unfollow = (userId: number) => {
  dispatch(unfollowReducer(userId))
}

useEffect(() => {
 dispatch(requestUsers(currentPage, pageSize, filter))
}, []);
return (
        <div>
          <div>
<UsersSearchForm onFilterChanged={onFilterChanged}/>
          </div>
     <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}/>
      
      {users.map((u) => (
        <User user={u} 
              followingInProgress={followingInProgress}
              key={u.id}
              unfollow={unfollow} 
              follow={follow} 
              />
        
      ))}
    </div>
   ) 
};


