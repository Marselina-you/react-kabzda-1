import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'samuray/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
export type InitialStateType = {
    userId:number |  null,
    email: string |  null, 
    login: string |  null,
    isAuth: boolean,
    captchaUrl: string | null

}
let initialState: InitialStateType = {
    userId: null as number | null,
    email: null as string | null, 
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type InitialType = typeof initialState;
const authReducer = (state = initialState, action: any): InitialType => {

    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: 
        return {
            
            ...state, 
            ...action.payload,
            
        }
        default: 
            return state;     
    }
}
type setAuthUserDataActionPayloadType = {
    userId: number | null,
    email:string | null,
    login: string | null, 
    isAuth:boolean | null
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
    
}
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}
//CREATOR
export const getCaptchaUrlSuccess = (captchaUrl: string) : getCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})
//thunk
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | false): setAuthUserDataActionType => ({type: SET_USER_DATA, payload: {
    userId, email, login, isAuth}})
    
export const getAuthUserData = () => async(dispatch: any) =>{
    
      let response =  await authAPI.me();
      if (response.data.resultCode === 0) {
              let {id,  email, login} = response.data.data;
              dispatch(setAuthUserData(id, email, login, true));
            }
          
    
}
export const login = (email: string, password: string, rememberMe: boolean, captcha ) => async(dispatch: any) => {
 let response = await authAPI.login(email, password, rememberMe, captcha)
 if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else {
                if (response.data.resultCode === 10) { 
                    dispatch(getCaptchaUrl())
                }
                let message = response.data.messages.lengtn > 0 ? response.data.messages[0] : "some errror"
                dispatch(stopSubmit("login", {_error: message}))
            }
}
export const getCaptchaUrl = () => async(dispatch) => {
    let response =  await securityAPI.getCaptchaUrl()
       const captchaUrl =  response.data.url;
       dispatch(getCaptchaUrlSuccess(captchaUrl));
             
}
export const logout = () => async(dispatch: any) => {
    let response =  await authAPI.logout()
        
             if (response.data.resultCode === 0) {
                 dispatch(setAuthUserData(null, null, null, false));
             }
}

export default authReducer;