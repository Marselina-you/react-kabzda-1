import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setUsers, setTotalUsersCount, unfollow } from '../../redux/usersReducer';
import Users from './Users';

import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(responce => {
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);
        
        this.props.setTotalUsersCount(responce.data.totalCount);
       
            
          });
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
        this.props.setIsFetching(false)
        this.props.setUsers(responce.data.items);
       
            
          })
    }
    render() {
      
          return <>
          {this.props.isFetching ? <Preloader/> : null }
          <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          /> 
          </>
        
        }
    
    }

let mapStateToProps = (state) => {
//принимает весь state
//возвращает что нужно

return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
}
}
/*let mapDispatchProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/




export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,  setIsFetching

}) (UsersContainer);

