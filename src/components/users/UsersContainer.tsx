import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  requestUsers, FilterType } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getUsersTotalCount, getUsersFilter } from '../../redux/users-selectors';
import { UserType } from '../types/types';
import { AppStateType } from '../../redux/redux-store';
import { threadId } from 'worker_threads';
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    filter: FilterType
}
  type OwnPropsType = {
    pageTitle: string
    
}
  type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    follow: (userId: number) => void 
    unfollow: (userId: number) => void   
    
    
   
  }
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
    
   
  

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
       this.props.getUsers(currentPage, pageSize, filter);
    
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize, filter } = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
       
    }
    onFilterChanged = (filter: FilterType) => {
      //this.props.getUsers(pageNumber, pageSize, "")
      const {pageSize} = this.props;
      this.props.getUsers(1, pageSize, filter)
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
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: getFollowInProgress(state),
    filter: getUsersFilter(state)
    
}
}


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType,  OwnPropsType, AppStateType>(
      mapStateToProps, 
      {follow, unfollow, getUsers: requestUsers})
   )(UsersContainer)
