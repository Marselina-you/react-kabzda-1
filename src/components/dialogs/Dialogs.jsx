import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";
import Button from '../button/Button';
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";






const Dialogs = (props) => {
  //let newMessageElement = React.createRef();

let addMessage = () => {
    props.dispatch(addMessageActionCreator());
}
let onMessageChange = (e) => {
  
  let text =  e.target.value;
  let action = updateMessageActionCreator(text);
  props.dispatch(action);
}
  

  let dialogsElements = props.state.dialogs.map((dialog) => (
   
    <Dialog name={dialog.name} id={dialog.id} img={dialog.img}/>
    
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message content={message.content} id={message.id} />
  ));
  
  return (
    <div>
      <div className={classes.dialogs}>
        
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      
      <textarea  onChange={onMessageChange} value={props.state.newMessageText} />
    
     <Button  addMessage={addMessage} value="add"/>
    </div>
  );
};

export default Dialogs;
