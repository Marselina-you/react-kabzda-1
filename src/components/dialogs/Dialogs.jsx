import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

import AddMessageForm from "./AddMessageForm";
import { reduxForm } from "redux-form";


const Dialogs = (props) => {
  const addNewMessage = (values) => {
    console.log(values.newMessageBody)
    props.addNewMessageFrom(values.newMessageBody)//addNewMessage from dialogsContainer
  }

  let dialogsElements = props.dialogs.map((dialog) => (<Dialog key={dialog.id} name={dialog.name} img={dialog.img}/>));
  let messagesElements = props.messages.map((message) => (<Message key={message.id} content={message.content}  />));
 
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage}/>
    </div>
  );
};
const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default Dialogs;
