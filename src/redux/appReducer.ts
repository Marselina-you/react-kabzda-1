import { getAuthUserData } from "./authReducer";

//import { getAuthUserData } from "./authReducer.ts";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_INITIALEZED = 'SET_INITIALEZED';

export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false,
   
}
const appReducer = (state = initialState, action: any) : InitialStateType=> {

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
export type InitializedSuccessActionType = {
    type: typeof SET_INITIALEZED
}

export const initializeSuccess = () : InitializedSuccessActionType => ({type: SET_INITIALEZED})
//thunk

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    })

    
}


export default appReducer;