import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/opjects-helpers";
import { User } from "../components/types/types";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [] as Array<User>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: [] as Array<number> //array of users id's
}

export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: any): InitialStateType  => {

    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
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
                : state.followInProgress.filter(id => id !== action.userId)}
        
        default: 
            return state;
    }

}
type FollowSuccessType = {
    type: typeof: FOLLOW,
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId });
type UnFollowSuccessType = {
    type: typeof: UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId });
type SetUsersType = {
    type: typeof: SET_USERS,
    users: array<User>
}
export const setUsers = (users: array<User>): SetUsersType => ({type: SET_USERS, users});
type SetCurrentPageType = {
    type: typeof: SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage:currentPage});
type SetTotalUsersCountType = {
    type: typeof: SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount});

type SetIsFetchingType = {
    type: typeof:  TOGGLE_IS_FETCHING,
    totalUsersCount: boolean
}
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleFollowingProgressType = {
    type: typeof: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingProgress   = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


//thunk
export const requestUsers = (page, pageSize) => {//getUsersThunkCreator
    return async(dispatch: any) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
    
     let data = await usersAPI.getUsers(page, pageSize)
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
       
    }
} 
const followUnfollowFlow = async(dispatch: any, userId: any, apiMethod: any, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId))
       let response = await apiMethod(userId)
          if (response.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
            dispatch(toggleFollowingProgress(false, userId))

   
} 
export const follow = (userId) => {//getUsersThunkCreator

    return async (dispatch: any) => {
       followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
        
    }
}  
export const unfollow = (userId) => {//getUsersThunkCreator
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
        
    }
}  

export default usersReducer;