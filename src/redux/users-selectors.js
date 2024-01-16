import { createSelectorHook } from "react-redux";

export const getUsers = (state) => {
    return state.usersPage.users;

}
export const getJustSuper = (state) => {
    return state.usersPage.users;
}
export const getSuper = createSelectorHook(getJustSuper, (users) => {
      return  users().filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;

}
export const getUsersTotalCount = (state) => {
    return state.usersPage.totalUsersCount;

}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;

}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;

}
export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress;

}
//     pageSize: ,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followInProgress: state.usersPage.followInProgress,