import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/header/HeaderContainer';
import Sidebar from './components/sidebar/Sidebar';
import { initializeApp } from './redux/appReducer.ts';
import { Suspense } from 'react';
import MyRoutes from './routes/MyRoutes';


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
      <MyRoutes/>
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

 