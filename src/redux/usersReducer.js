import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/opjects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map( u =>{
                //    if (u.id === action.userId) {
                //     return {...u, followed: true }
                //    }
                //     return u;

                // } )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: 
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT: 
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {...state, 
                followInProgress: action.isFetching 
                ? [...state.followInProgress, action.userId] 
                : state.followInProgress.filter(id => id != action.userId)}
        
        default: 
            return state;
    }

}
export const followSuccess = (userId) => ({type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress   = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


//thunk
export const requestUsers = (page, pageSize) => {//getUsersThunkCreator
    return async(dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
    
     let data = await usersAPI.getUsers(page, pageSize)
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
       
    }
} 
const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId))
       let response = await apiMethod(userId)
          if (response.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
            dispatch(toggleFollowingProgress(false, userId))

   
} 
export const follow = (userId) => {//getUsersThunkCreator

    return async (dispatch) => {
       followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
        
    }
}  
export const unfollow = (userId) => {//getUsersThunkCreator
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
        
    }
}  

export default usersReducer;