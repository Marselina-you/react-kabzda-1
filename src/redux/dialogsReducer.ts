import { DialogsType, MessagesType } from "../components/types/types";
import {InferActionsTypes} from './redux-store';



let initialState = {dialogs: [{id: 1,name: "Dimych"},
{id: 2, name: "Valera"},
{id: 3, name: "Manya"},
{id: 4, name: "Sveta"},
{id: 5, name: "Ahan"}
] as Array<DialogsType>,

messages: [{id: 1, content: "hey"},
{id: 2, content: "hoy"},
{id: 3, content: "huy"},
{id: 4, content: "hay"},
{id: 5, content: "hoooyyyy"}
] as Array<MessagesType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  
        switch(action.type) {
        case 'ADD_MESSAGE': {
            
            let newMessage = {
                id: state.messages.length+1,
                content: action.newMessageBody,
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
    }
            
  
               
        default: 
            return state;
    }
    
   
}
export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'ADD_MESSAGE', newMessageBody} as const)
}


export default dialogsReducer;
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>