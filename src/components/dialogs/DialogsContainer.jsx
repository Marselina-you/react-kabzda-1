import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {

  return {
    dialogsPage: state.pageMessages,
    newMessageText: state.pageMessages.newMessageText,
    messages: state.pageMessages.messages,
    dialogs: state.pageMessages.dialogs,
    
    
  }
}

let mapDispatchToProps = (dispatch) => {
   return {
    messageChangeText: (text) => {
      let action = updateMessageActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) ( AuthRedirectComponent);


export default DialogsContainer;
