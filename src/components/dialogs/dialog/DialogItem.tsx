import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../../images/img.png';

import classes from './Dialog.module.css'


type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            
                    <NavLink to={path}>{props.name}</NavLink>
                    <img src={image} alt=''/>
                    
                </div>
    );
};



export default DialogItem;