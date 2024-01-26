import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/opjects-helpers";
import { UserType } from "../components/types/types";
import { ThunkAction } from "redux-thunk";
import {Dispatch} from 'redux'
import { AppStateType } from "./redux-store";
import {BaseThunkType, InferActionsTypes} from './redux-store'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: [] as Array<number> //array of users id's
}


const usersReducer = (state = initialState, action: ActionsTypes): InitialState  => {

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
export const actions = {
    followSuccess: (userId:number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId } as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage:currentPage}  as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT, 
        count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}as const)

}



//thunk
export const requestUsers = (page: number, pageSize: number): ThunkType => {//getUsersThunkCreator
    return async(dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
    
     let data = await usersAPI.getUsers(page, pageSize)
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
       
    }
} 
const _followUnfollowFlow = async(dispatch: Dispatch<ActionsTypes>, 
    userId: number, 
    apiMethod: any, 
    actionCreator: (userID: number) => ActionsTypes) => {

    dispatch(actions.toggleFollowingProgress(true, userId))
       let response = await apiMethod(userId)
          if (response.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
            dispatch(actions.toggleFollowingProgress(false, userId))

   
} 
export const follow = (userId: number): ThunkType => {//getUsersThunkCreator

    return async (dispatch) => {

       _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
        
    }
}  
export const unfollow = (userId: number): ThunkType => {//getUsersThunkCreator
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
        
    }
}  

export default usersReducer;
export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>