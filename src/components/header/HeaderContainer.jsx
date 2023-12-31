import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component  {
  

  componentDidMount() {
    this.props.getAuthUserData();
 }
 
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

  
  export default connect(mapStateToProps, { getAuthUserData: getAuthUserData}) (HeaderContainer);