import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";




const Dialogs = (props) => {
  
  

  let dialogsElements = props.valueDialog.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.valueMessage.map((message) => (
    <Message content={message.content} id={message.id} />
  ));

  return (
    <div>
      <div className={classes.dialogs}>
        
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
