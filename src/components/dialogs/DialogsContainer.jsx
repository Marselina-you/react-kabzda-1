import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
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




export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);
