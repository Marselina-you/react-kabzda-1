import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow,  requestUsers, toggleFollowingProgress } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getUsersTotalCount } from '../../redux/users-selectors';




class UsersContainer extends React.Component {


    componentDidMount() {
       
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
       
    }
    render() {
      
          return <>
          {this.props.isFetching ? <Preloader/> : null }
          <Users 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followInProgress={this.props.followInProgress}
          /> 
          </>
        
        }
    
    }

let mapStateToProps = (state) => {
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


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress,  requestUsers: requestUsers}),
    //withAuthRedirect
)(UsersContainer)
