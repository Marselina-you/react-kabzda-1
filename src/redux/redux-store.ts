import {  Action, applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import   { thunk as thunkMiddleware } from 'redux-thunk';

import {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
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

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
//отдали редюсеры store, middleware(for thunk) 
//@ts-ignore
window.__store__ = store;

export default store;

