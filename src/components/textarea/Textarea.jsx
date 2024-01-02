import React from 'react';
import s from './Textarea.module.css'


const Textarea = (props) => {
    let newMessageElement = React.createRef();
    return (
        <div>
            <textarea ref={newMessageElement}  className={s.textarea} onChange={props.onMessageChange} value={props.value}></textarea>
        </div>
    );
};



export default Textarea;