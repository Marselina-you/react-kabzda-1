import React from 'react';
//import s from './Users.module.css';

import Paginator from '../common/paginator/Paginator';
import User from './User';


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, followInProgress,   ...props}) => {
   
    return (
        <div>
     <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}/>
      
      {users.map((u) => (
        <User user={u} key={u.id}
              followInProgress={followInProgress}
              unfollow={unfollow} 
              follow={follow} 
              />
        
      ))}
    </div>
    );
};



export default Users;
