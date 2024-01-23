import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import{ thunk as thunkMidleware } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import { compose } from "redux";
import appReducer from "./appReducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    pageMessages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});//смешиваем редюсеры
type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMidleware)));
//отдали редюсеры store, middleware(for thunk) 
//@ts-ignore
window.__store__ = store;

export default store;

