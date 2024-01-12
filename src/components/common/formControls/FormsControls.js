import React from "react";
import s from "./FormsControls.module.css"

const FormsControl = ({input, meta, ...props}) => {
    const hasError = meta.touched &&  meta.error;  
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")  } >
            <div className={s.inputMy}>
            {props.children}
            </div>

       {hasError && <span>{meta.error}</span>}    
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
  return (<FormsControl {...props}>
   <textarea {...input} {...restProps} />
  </FormsControl>)
}
export const InputMy = (props) => {
    const {input, meta, children, ...restProps} = props;
      return (
         <FormsControl {...props} >
         <input {...input} {...restProps}/>
         </FormsControl>
             
        
      )
  }
