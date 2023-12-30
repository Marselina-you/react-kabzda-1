import React from 'react';
import classes from './Button.module.css'


const Button = (props) => {
    return (
        
            <button className={classes.btn}>{props.value}</button> 
        
    );
};



export default Button;