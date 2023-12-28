import React from 'react';
import logo from './logo.png'
import  classes from './Header.module.css';

const Header = () => {
    return (
       
    <header className={classes.header}>
      <img src={logo} alt='logo' />
    </header>  
        
    );
};



export default Header;