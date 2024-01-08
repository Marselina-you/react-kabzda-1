import React from 'react';
import classes from './Button.module.css'


const Button = (props) => {
   //debugger;
    return (
        
            <button disabled={props.disabled} onClick={props.addMessage} className={classes.btn}>{props.value}</button> 
        
    );
};



export default Button;