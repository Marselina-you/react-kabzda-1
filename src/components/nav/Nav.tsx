import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';


const Nav: React.FC = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
        </div>
        <div className={classes.item}>
          {/**{`${classes.item} ${classes.active}`} 2 класса*/}
          <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      
        </div>
        <div className={classes.item}>
        <NavLink to="/users" className = { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
       
        </div>
        <div className={classes.item}>
        <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
       
        </div>
        <div className={classes.item}>
          <NavLink to='/music' className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
        
        </div>
        <div className={classes.item}>
        <NavLink to='/settings' className = { navData => navData.isActive ? classes.active : classes.item }>settings</NavLink>
        
        </div>
      </nav>
    );
};



export default Nav;