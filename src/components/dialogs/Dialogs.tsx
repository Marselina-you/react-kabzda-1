import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

import AddMessageForm from "./AddMessageForm";
import { reduxForm } from "redux-form";
import { InitialStateType } from "../../redux/dialogsReducer";

type PropsType = {
  pageMessages: InitialStateType,
  sendMessage: (messageText: string) => void


}

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.pageMessages;
  const addNewMessage = (values: {newMessageBody: string}) => {
    props.sendMessage(values.newMessageBody)//addNewMessage from dialogsContainer
  }

  let dialogsElements = state.dialogs.map((dialog) => (<Dialog key={dialog.id} name={dialog.name} img={dialog.img}/>));
  let messagesElements = state.messages.map((message) => (<Message key={message.id} content={message.content}  />));
 
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
