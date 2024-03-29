import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogsReducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";



let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
   }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {...actions}),
  withAuthRedirect
  )(Dialogs);
