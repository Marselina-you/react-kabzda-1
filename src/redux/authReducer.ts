import { ResultCodeForCapcthaEnum, ResultCodesEnum } from "../api/api";
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/auth-api";
import {securityAPI} from '../api/security-api';
import {BaseThunkType, InferActionsTypes} from './redux-store';
import {FormAction} from 'redux-form/lib/actions';

let initialState = {
    userId: null as number | null,
    email: null as string | null, 
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: any): InitialStateType => {

    switch(action.type) {
        case 'samuray/auth/SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS': 
        return {
            
            ...state, 
            ...action.payload,
            
        }
        default: 
            return state;     
    }
}
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | false) => ({type: 'samuray/auth/SET_USER_DATA', payload: {
        userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    })
}
//thunk
export const getAuthUserData = (): ThunkType => async(dispatch) =>{
    let meData =  await authAPI.me();
      if (meData.resultCode === ResultCodesEnum.Success) {
              let {id,  email, login} = meData.data;
              dispatch(actions.setAuthUserData(id, email, login, true));
            }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string ) => async(dispatch: any) => {
 let loginData = await authAPI.login(email, password, rememberMe, captcha)
 if (loginData.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData());
            }
            else {
                if (loginData.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired) { 
                    dispatch(getCaptchaUrl())
                }
                let message = loginData.messages.length > 0 ? loginData.messages[0] : "some errror"
                dispatch(stopSubmit("login", {_error: message}))
            }
}
export const getCaptchaUrl = (): ThunkType => async(dispatch) => {
    let response =  await securityAPI.getCaptchaUrl()
       const captchaUrl =  response.data.url;
       dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
             
}
export const logout = () => async(dispatch: any) => {
    let response =  await authAPI.logout()
        
             if (response.data.resultCode === 0) {
                 dispatch(actions.setAuthUserData(null, null, null, false));
             }
}

export default authReducer;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>