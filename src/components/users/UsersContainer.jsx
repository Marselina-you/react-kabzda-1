import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow,  getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




class UsersContainer extends React.Component {


    componentDidMount() {
       
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //this.props.setIsFetching(true);
        //usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
       // this.props.setIsFetching(false);
        //this.props.setUsers(data.items);
        //this.props.setTotalUsersCount(data.totalCount);
       //});
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        //this.props.setIsFetching(true)
      //this.props.setCurrentPage(pageNumber);
      //usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //this.props.setIsFetching(false)
        //this.props.setUsers(data.items);
       //})
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
//принимает весь state
//возвращает что нужно

return {
    
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress,
}
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: getUsers}),
    //withAuthRedirect
)(UsersContainer)
