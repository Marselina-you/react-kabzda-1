import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;

}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;

}
export const getUsersTotalCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;

}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;

}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;

}
export const getFollowInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;

}
export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter;

}
