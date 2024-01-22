import { DialogsType, MessagesType } from "../components/types/types";
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogs: [{
    id: 1,
    name: "Dimych",
    img: 'img.png'
},
{
    id: 2,
    name: "Valera",
    img: 'img.png'
},
{
    id: 3,
    name: "Manya",
    img: 'img.png'
},
{
    id: 4,
    name: "Sveta",
    img: 'img.png'
},
{
    id: 5,
    name: "Ahan",
    img: 'img.png'
}
] as Array<DialogsType>,

messages: [{
    id: 1,
    content: "hey"
},
{
    id: 2,
    content: "hoy"
},
{
    id: 3 as number | null,
    content: "huy"
},
{
    id: 4,
    content: "hay"
},
{
    id: 5,
    content: "hoooyyyy"
}
] as Array<MessagesType>



}
export type InitialStateType = typeof initialState;
const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  
        switch(action.type) {
        case ADD_MESSAGE: {
            //debugger;
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
type addMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody: string): addMessageActionCreatorType => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;