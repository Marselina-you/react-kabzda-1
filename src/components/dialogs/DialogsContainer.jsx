import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
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
    addNewMessageFrom: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
 }
}




export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);
