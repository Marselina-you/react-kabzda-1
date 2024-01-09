import React from "react";
import { connect } from "react-redux";
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
    isAuth: state.auth.isAuth,
    
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;
