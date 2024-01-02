import React from 'react';
import Nav from '../nav/Nav';
import Freinds from './freinds/Freinds';
import s from './Sidebar.module.css'

const Sidebar = (props) => {
    
         

    return (
        <div className={s.block}>
         <Nav/>   
         {/*<Freinds state={props.state}/>*/}
        </div>
    );
};



export default Sidebar;