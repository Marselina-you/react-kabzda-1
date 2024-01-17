import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
//import DialogsContainer from './components/dialogs/DialogsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/Login';
import Music from './components/music/Music';
import News from './components/news/News';
//import ProfileContainer from './components/profile/ProfileContainer';
import Settings from './components/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from './components/users/UsersContainer';
import { initializeApp } from './redux/appReducer';
import { Suspense } from 'react';
//import DialogsContainer from './components/dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))





class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
 }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    
    return (
     <div className="app-wrapper">
     <HeaderContainer />
     <Sidebar />
    <div className='app-wrapper-content'>
    <Suspense fallback={<div><Preloader/></div>}>
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
  </Suspense>
      </div>
     </div>
    
    
    );
  }

}
const mapToStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default  connect(mapToStateToProps, {initializeApp})(App) 

  //compose(
  //  withRouter,