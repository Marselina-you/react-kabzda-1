import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer.ts';
import Header from './Header';

class HeaderContainer extends React.Component  {
  

 
 
  render() {
      return  <Header {...this.props} />
        
};
};

let mapStateToProps = (state) => {
  //принимает весь state
  //возвращает что нужно
  
  return {
    
      isAuth: state.auth.isAuth,
      login: state.auth.login
     
  }
  }

  
  export default connect(mapStateToProps, { logout}) (HeaderContainer);