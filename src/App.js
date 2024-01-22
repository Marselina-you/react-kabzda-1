import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/Login';
import Music from './components/music/Music';
import News from './components/news/News';
import Settings from './components/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from './components/users/UsersContainer';
import { initializeApp } from './redux/appReducer.ts';
import { Suspense } from 'react';
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))

class App extends Component {
  catchAllUnHandleErrors = (promiseRejectionEvent) => {
   
    console.log('error')
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnHandleErrors);
 }
 componentWillUnmount() {
  window.removeEventListener("unhandledrejection", this.catchAllUnHandleErrors);
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
      <Route path='/' element={<ProfileContainer />}/>
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

 