import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {  BrowserRouter, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import Header from './components/header/Header';

import { initializeApp } from './redux/appReducer';
import { Suspense } from 'react';
import MyRoutes from './routes/MyRoutes';
import store, { AppStateType } from './redux/redux-store';
import { compose } from 'redux';
import { Layout, Breadcrumb, Menu } from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout

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
      <Layout>
         
         <Header/>
         {/* <Avatar style={{backgroundColor: '#87d068',}}icon={<UserOutlined />}/> */}
        <Content style={{padding: '0 50px'}}>
       
          <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    
              <Layout style={{padding: '24px 0'}}>
              <Sider className="site-layout-background" width={200}>
              <Menu
                                mode="inline"
                                /*  defaultSelectedKeys={['7']}*/
                                /*  defaultOpenKeys={['sub1']}*/
                                style={{height: '100%'}}
                            >
                                 <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1">  <Link to="/profile">Profile</Link></Menu.Item>
                                    <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to="/users">Developers</Link></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                                    <Menu.Item key="9"><Link to="/chat">Chat</Link></Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                               
                               
                            </Menu>
                                   
                </Sider>
            <Content style={{padding: '0 24px', minHeight: 280}}>
    <Suspense fallback={<div><Preloader/></div>}>
      <MyRoutes/>
  </Suspense>
  </Content>
  </Layout>
</Content>
  <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2020 Created by IT-KAMASUTRA</Footer>
     </Layout>
    
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

 