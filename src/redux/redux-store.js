import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";


import dialogsReducer from "./dialogsReducer.ts";
import profileReducer from "./profileReducer.ts";
import usersReducer from "./usersReducer.ts";
import{ thunk as thunkMidleware } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer.ts";
import { compose } from "redux";
import appReducer from "./appReducer.ts";



let reducers = combineReducers({
    profilePage: profileReducer,
    pageMessages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});//смешиваем редюсеры
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers,  composeEnhancers(applyMiddleware(thunkMidleware)));
//отдали редюсеры store, middleware(for thunk) 

window.store = store;

export default store;

