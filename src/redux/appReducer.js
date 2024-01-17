
import { getAuthUserData } from "./authReducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_INITIALEZED = 'SET_INITIALEZED';

let initialState = {
    initialized: false,
    email: null, 
    login: null,
    isAuth: false
}
const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
           
            return {
                ...state, 
                ...action.payload,
                
            }
            case SET_INITIALEZED:
           
                return {
                    ...state, 
                    initialized: true,
                    
                }
        default: 
            return state;     
    }
}
//thunk
export const initializeSuccess = () => ({type: SET_INITIALEZED})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    })
//    promise.then(() => {
//     dispatch(initializeSuccess())
//    })
    
}


export default appReducer;