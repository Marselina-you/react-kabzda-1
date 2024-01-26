import { getAuthUserData } from "./authReducer";
export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false,
   
}
const appReducer = (state = initialState, action: any) : InitialStateType=> {

    switch(action.type) {
        case 'SET_USER_DATA':
           
            return {
                ...state, 
                ...action.payload,
                
            }
            case 'SET_INITIALEZED':
           
                return {
                    ...state, 
                    initialized: true,
                    
                }
        default: 
            return state;     
    }
}
export const actions = {
    initializeSuccess: ()  => ({type: 'SET_INITIALEZED'}as const)
}

//thunk

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(actions.initializeSuccess())
    })

    
}


export default appReducer;