import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect  = (state) => ({
  isAuth: state.auth.isAuth//из store
  });

export const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
    render() {
        if (!this.props.isAuth) return <Navigate to='/login' />
        return <Component {...this.props}/>
    }
   }
   
  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)
   return connectedAuthRedirectComponent;
};



