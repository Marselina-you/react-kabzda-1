import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css"

const FormsControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched &&  error;  
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")  } >
            <div className={s.inputMy}>
            {children}
            </div>

       {hasError && <span>{error}</span>}    
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
  
export const CreateField = (placeholder, name, validators, component, props={}, text="") => (
<div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>{text}
    </div>
) 
