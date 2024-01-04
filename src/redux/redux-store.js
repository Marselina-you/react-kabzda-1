import {  combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    pageMessages: dialogsReducer,
    usersPage: usersReducer
});//смешиваем редюсеры

let store = legacy_createStore(reducers);//отдали редюсеры store

window.store = store

export default store;

