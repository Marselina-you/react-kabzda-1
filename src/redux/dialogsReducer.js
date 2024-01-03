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
   

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                content: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
                state.newMessageText = action.newText;
                return state;
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