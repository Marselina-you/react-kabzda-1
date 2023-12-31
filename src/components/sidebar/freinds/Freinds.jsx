import React from 'react';
import Freind from './freind/Freind';
import s from './Freinds.module.css'


const Freinds = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => (
        <Freind name={dialog.name} id={dialog.id} />
      ));
   
    return (
        <div className={s.block}>
            <div className={s.title}>Freinds</div>
            <div className={s.item}>{dialogsElements}</div>
         
           
        </div>
    );
};



export default Freinds;