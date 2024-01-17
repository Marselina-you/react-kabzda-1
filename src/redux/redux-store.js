import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";
import appReducer from "./appReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import{ thunk as thunkMidleware } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import { compose } from "redux";


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

