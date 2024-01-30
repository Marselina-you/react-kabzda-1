import React from "react";
import DialogItem from "./dialog/DialogItem";
import MessageItem from "./message/Message";
import classes from "./Dialogs.module.css";
import AddMessageForm from "./AddMessageForm";

import { InitialStateType } from "../../redux/dialogsReducer";

type PropsType = {
  dialogsPage: InitialStateType,
  sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string
}
const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage;
  const addNewMessage = (values: {newMessageBody: string}) => {
    props.sendMessage(values.newMessageBody)//addNewMessage from dialogsContainer
  }
  
  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
  // let dialogsElements = state.dialogs.map((d) => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
  let messagesElements = state.messages.map((m) => (<MessageItem key={m.id} message={m.content}  />));
 
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
