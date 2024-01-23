import { createSelectorHook } from "react-redux";
import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;

}
// const getUsersSelector = (state: AppStateType) => {
//     return state.usersPage.users;
// }

// export const getUsers = createSelectorHook(getUsersSelector,
//     (users) => {
//     return users.filter(u => true);
// })
// export const getJustSuper = (state: AppStateType) => {
//     return state.usersPage.users;
// }
// export const getSuper = createSelectorHook(getJustSuper, (users) => {
//       return  users().filter(u => true)
// })
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
    return state.usersPage.followInProgress;

}
