import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';
import { MapPropsType, DispatchPropsType } from './Header';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
  
render() {
      return  <Header {...this.props} />
        
};
};

let mapStateToProps = (state: AppStateType) => {
  //принимает весь state
  //возвращает что нужно
  
  return {
    
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      
     
  }as MapPropsType
  }

  
  export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)