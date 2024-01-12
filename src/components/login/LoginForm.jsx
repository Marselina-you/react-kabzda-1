import React from "react";
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import Button from "../button/Button";
import { InputMy } from "../common/formControls/FormsControls";
import s from './../common/formControls/FormsControls.module.css'



const LoginForm = (props) => {
    return (
     
          <form onSubmit={props.handleSubmit}>
          
                <div><Field placeholder={"Email"} name={"email"} component={InputMy} validate={[required]}/></div>
                <div><Field placeholder={"Password"} type={"password"} name={"password"} component={InputMy}  autocomplete="on" validate={[required]}/></div>
                <div><Field  component={InputMy} name={"remember"} type={"checkbox"}/>remember me</div>
                <div><Button value="Log In"/></div>
                {props.error &&  <div className={s.formSummaryError}>
                    {props.error}
                </div>}
               
           </form>  
        
    );
};


export default LoginForm;