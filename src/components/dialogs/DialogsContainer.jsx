import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";






const DialogsContainer = (props) => {
  
  let state = props.store.getState();

let addMessage = () => {
  
  props.store.dispatch(addMessageActionCreator());
}
let onMessageChange = (text) => {
  let action = updateMessageActionCreator(text);
  props.store.dispatch(action);
}
  

 
  
  return (
    <Dialogs 
     messageChangeText={ onMessageChange }
     newMessageText={state.pageMessages.newMessageText} 
     addMessage={ addMessage } 
     messages={state.pageMessages.messages}
     dialogs={state.pageMessages.dialogs}
     />
  );
};

export default DialogsContainer;
