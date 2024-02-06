import React, { useEffect } from 'react';
import { FilterType,  requestUsers, followReducer, unfollowReducer} from '../../redux/usersReducer';
import Paginator from '../common/paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentPage, getPageSize, getUsers, getUsersFilter, getUsersTotalCount, getFollowInProgress } from '../../redux/users-selectors';
import { TypeDispatch } from '../../redux/redux-store';
import { useSearchParams } from 'react-router-dom';
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
   const [searchParams, setSearchParams] = useSearchParams()
   useEffect(() => {

    const result: any = {}
    // @ts-ignore
    for (const [key, value] of searchParams.entries()) {
       let value2: any = +value
       if (isNaN(value2)) {
          value2 = value
       }
       if (value === 'true') {
          value2 = true
       } else if (value === 'false') {
          value2 = false
       }
       result[key] = value2
    }

    let actualPage = result.page || currentPage
    let term = result.term || filter.term

    let friend = result.friend || filter.friend
    if (result.friend === false) {
       friend = result.friend
    }

    const actualFilter = {friend, term}

    dispatch(requestUsers(actualPage, pageSize, actualFilter))

    // eslint-disable-next-line
 }, [])


 useEffect(() => {

    const term = filter.term
    const friend = filter.friend

    let urlQuery =
       (term === '' ? '' : `&term=${term}`)
       + (friend === null ? '' : `&friend=${friend}`)
       + (currentPage === 1 ? '' : `&page=${currentPage}`)

    setSearchParams(urlQuery)

    // eslint-disable-next-line
 }, [filter, currentPage])

 
   
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


