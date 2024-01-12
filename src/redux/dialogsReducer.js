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
],

messages: [{
    id: 1,
    content: "hey"
},
{
    id: 2,
    content: "hoy"
},
{
    id: 3,
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
],



}
const dialogsReducer = (state = initialState, action) => {
  
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
export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;