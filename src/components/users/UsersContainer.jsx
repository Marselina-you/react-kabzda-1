import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
//принимает весь state
//возвращает что нужно
return {
    users: state.usersPage.users
}
}
const mapDispatchProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}



export default connect(mapStateToProps, mapDispatchProps) (Users);