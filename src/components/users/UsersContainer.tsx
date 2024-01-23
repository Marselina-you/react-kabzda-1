import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow,  requestUsers, toggleFollowingProgress } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getUsersTotalCount } from '../../redux/users-selectors';
import { UserType } from '../types/types';
import { AppStateType } from '../../redux/redux-store';
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followInProgress: Array<number>
}
  type OwnPropsType = {
    pageTitle: string
    
}
  type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void 
    unfollow: (userId: number) => void   
    
    
   
  }
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
    
   
  

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
       
        this.props.getUsers(currentPage, pageSize);
    
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
       
    }
    render() {
      
          return <>
          <h2>{this.props.pageTitle}</h2>
          {this.props.isFetching ? <Preloader/> : null }
          <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followInProgress={this.props.followInProgress}
          /> 
          </>
        
        }
    
    }

let mapStateToProps = (state: AppStateType) : MapStatePropsType => {
//принимает весь state //возвращает что нужно
 return {
    
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getUsersTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state),
    
}
}


export default compose<PropsType>(
    connect(mapStateToProps, {follow: follow, unfollow, setCurrentPage, toggleFollowingProgress,  getUsers: requestUsers}),
   )(UsersContainer)
