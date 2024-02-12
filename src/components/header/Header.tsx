import React from 'react';

import { Avatar, Button, Col, Menu, Row } from 'antd';
import { UserOutlined} from '@ant-design/icons'


import { Link } from 'react-router-dom';
import { Layout} from 'antd';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer';

export type MapPropsType = {}



 const Header: React.FC<MapPropsType> = (props) => {
  
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectCurrentUserLogin)
 

  
  const {Header} = Layout

  const dispatch: any = useDispatch()

  const logoutCallBack = () => {
    dispatch(logout())
  }
    return (
      <Header>
        <div className='logo'>
          <Row>
            <Col span={18}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key='1'>
<Link to='/developers'>Developers</Link>
                   </Menu.Item>
              </Menu>
            </Col>
           
            {isAuth 
       ? <><Col span={1}>
         <Avatar alt={login || ''}  style={{backgroundColor: '#87d068',}}icon={<UserOutlined />}/>
         </Col>
         <Col span={5}>
         
     <Button onClick={logoutCallBack}>выйти</Button>
     </Col></>
        : <Col span={6}>
          <Button><Link to={'/login'}>Login</Link> </Button>
        </Col>} 
          </Row>
        </div>
      </Header>
       
    // <header className={classes.header}>
    //    <Avatar style={{backgroundColor: '#87d068',}}icon={<UserOutlined />}/>
    //   <img src={logo} alt='logo' />
    //   <div className={classes.loginBlock}>
    //     {props.isAuth 
    //     ? <div className={classes.login}>{props.login} - <button onClick={props.logout}>выйти</button></div>
    //    : <NavLink to={'/login'}>Login</NavLink> }
    //   </div>
    // </header>  
        
    );
};
export default Header;
