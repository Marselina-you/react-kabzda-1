import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import{ thunk as thunkMidleware } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    pageMessages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});//смешиваем редюсеры

let store = legacy_createStore(reducers, applyMiddleware(thunkMidleware));//отдали редюсеры store, middleware(for thunk) 

window.store = store;

export default store;

