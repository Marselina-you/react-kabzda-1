import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import DialogsContainer from './components/dialogs/DialogsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/Login';
import Music from './components/music/Music';
import News from './components/news/News';
import ProfileContainer from './components/profile/ProfileContainer';
import Settings from './components/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from './components/users/UsersContainer';
import { initializeApp } from './redux/appReducer';
import store from './redux/redux-store';





class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
 }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    
    return (
      <BrowserRouter>
    
      <div className="app-wrapper">
     <HeaderContainer />
     <Sidebar />
    
    <div className='app-wrapper-content'>
   
      <Routes>
      <Route exact path='/dialogs' element={<DialogsContainer />} />
      <Route path='/profile/:userId?' element={<ProfileContainer />}/>
      <Route path='/profile/' element={<ProfileContainer />}/>
      <Route path='/users' element={<UsersContainer />}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/login' element={<LoginPage />}/>
  </Routes>
      </div>
     </div>
    
      </BrowserRouter>
    );
  }

}
const mapToStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default  connect(mapToStateToProps, {initializeApp})(App) 

  //compose(
  //  withRouter,