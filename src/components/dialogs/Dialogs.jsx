import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";
import Button from '../button/Button';





const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    
    props.addMessage();


}
  

  let dialogsElements = props.state.dialogs.map((dialog) => (
    
    <Dialog name={dialog.name} id={dialog.id} img={dialog.img}/>
    
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message content={message.content} id={message.id} />
  ));
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessage(text)
}
  return (
    <div>
      <div className={classes.dialogs}>
        
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      
      <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText} />
    
     <Button  addMessage={addMessage} value="add"/>
    </div>
  );
};

export default Dialogs;
