import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";
import Button from '../button/Button';

const Dialogs = (props) => {
  
  let addMessage = () => {
    props.addMessage();
  }
let onMessageChange = (e) => {
  let text =  e.target.value;
  props.messageChangeText(text)
}
  let dialogsElements = props.dialogs.map((dialog) => (<Dialog name={dialog.name} id={dialog.id} img={dialog.img}/>));
  let messagesElements = props.messages.map((message) => (<Message content={message.content} id={message.id} />));
  
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <textarea  onChange={onMessageChange} value={props.newMessageText} />
      <Button  addMessage={addMessage} value="add"/>
    </div>
  );
};

export default Dialogs;
