import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {  BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/header/HeaderContainer';
import Sidebar from './components/sidebar/Sidebar';
import { initializeApp } from './redux/appReducer';
import { Suspense } from 'react';
import MyRoutes from './routes/MyRoutes';
import store, { AppStateType } from './redux/redux-store';
import { compose } from 'redux';

export const withRouter = (Component: any) =>{
  const Wrapper = (props: any) =>{
      const history = useNavigate();
      return <Component history={history} {...props}/>
  } 
  return Wrapper;
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnHandleErrors = (e: PromiseRejectionEvent ) => {
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
const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})
let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </BrowserRouter>
}

export default  SamuraiJSApp

 