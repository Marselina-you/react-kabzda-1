import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogsReducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";



let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.pageMessages,
    // newMessageText: state.pageMessages.newMessageText,
    // messages: state.pageMessages.messages,
    // dialogs: state.pageMessages.dialogs,
    }
}



export default compose(
  connect(mapStateToProps, {...actions}),
  withAuthRedirect
  )(Dialogs);
