
import { updateObjectInArray } from "../utils/opjects-helpers";
import { UserType } from "../components/types/types";
import {BaseThunkType, InferActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import { usersAPI } from "../api/users-api";
import {APIResponseType} from '../api/api'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users id's,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}
const usersReducer = (state = initialState, action: ActionsTypes): InitialState  => {

    switch(action.type) {
        case 'FOLLOW': 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
              }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'SET_USERS': 
            return {...state, users: action.users}
        case 'SET_FILTER': 
            return {...state, 
                filter: action.payload}    
        case 'SET_CURRENT_PAGE': 
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT': 
            return {...state, totalUsersCount: action.count}
        case 'TOGGLE_IS_FETCHING': 
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': 
            return {...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)}
        
        default: 
            return state;
    }
}
export const actions = {
    followSuccess: (userId:number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setFilter: (filter: FilterType) => ({type: 'SET_FILTER', payload: filter} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage:currentPage}  as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT', 
        count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId}as const)
}
//thunk
export const requestUsers = (page: number, 
    pageSize: number, filter: FilterType): ThunkType => {//getUsersThunkCreator
    return async(dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));

    
     let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
       }
} 
const _followUnfollowFlow = async(dispatch: Dispatch<ActionsTypes>, 
    userId: number, 
    apiMethod: (userId: number) => Promise<APIResponseType>,
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
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>