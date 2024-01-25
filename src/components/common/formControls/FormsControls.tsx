import React from "react";
import { Field, WrappedFieldProps } from "redux-form";
import s from "./FormsControls.module.css"
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'
import {FieldValidatorType} from "../../../utils/validators/validators"

type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
    
}

const FormsControl: React.FC<FormsControlPropsType> = ({ meta: {touched, error}, child}) => {
    const hasError = touched &&  error;  
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")  } >
            <div className={s.inputMy}>
            {child}
            </div>

       {hasError && <span>{error}</span>}    
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta,  ...restProps} = props;
  return (<FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>)
}
export const InputMy: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
      return <FormsControl {...props} ><input {...input} {...restProps}/></FormsControl>
}
  
export function CreateField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
return <div>
<Field placeholder={placeholder} name={name}
validate={validators}
component={component}
{...props}
/> {text}
</div>
}
export type GetStringKeys<T> = Extract<keyof T, string>
