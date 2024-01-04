const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
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
newMessageText: "It's my first message!"

}


const dialogsReducer = (state = initialState, action) => {
   //let stateCopy;
        switch(action.type) {
        case ADD_MESSAGE: {
            
            let newMessage = {
                id: state.messages.length+1,
                content: state.newMessageText,
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            }
           
            
            
            //stateCopy.messages = [...state.messages]
            //stateCopy.messages.push(newMessage);
            //stateCopy.newMessageText = '';
            
        }
            
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newText
                
            }
            //stateCopy.newMessageText = action.newText;
           
            //return stateCopy;
        }
               
        default: 
            return state;
    }
    
   
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE, newText: text
    }
}
export default dialogsReducer;