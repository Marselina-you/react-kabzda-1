import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Manya" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Ahan" },
  ];
  let messages = [
    { id: 1, content: "hey" },
    { id: 2, content: "hoy" },
    { id: 3, content: "huy" },
    { id: 4, content: "hay" },
    { id: 5, content: "hooooy" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((message) => (
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
