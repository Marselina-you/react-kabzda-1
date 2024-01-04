import {  combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    pageMessages: dialogsReducer
});//смешиваем редюсеры

let store = legacy_createStore(reducers);//отдали редюсеры store

window.store = store

export default store;

