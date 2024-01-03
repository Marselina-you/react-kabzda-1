const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const dialogsReducer = (state, action) => {
   

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