import React from "react";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onMessageChange = (text) => {
          let action = updateMessageActionCreator(text);
          store.dispatch(action);
        };
        return (
          <Dialogs
            messageChangeText={onMessageChange}
            newMessageText={state.pageMessages.newMessageText}
            addMessage={addMessage}
            messages={state.pageMessages.messages}
            dialogs={state.pageMessages.dialogs}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
