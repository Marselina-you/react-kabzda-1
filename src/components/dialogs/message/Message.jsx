import React from 'react';
import classes from './Message.module.css'


const Message = (props) => {
    return (
        <div className={classes.message} data-id={props.id}>
       {props.content}{props.value}
        </div>
    );
};



export default Message;