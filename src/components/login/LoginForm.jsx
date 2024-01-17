import React from "react";
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import Button from "../button/Button";
import { InputMy, CreateField } from "../common/formControls/FormsControls";
import s from './../common/formControls/FormsControls.module.css'



const LoginForm = ({handleSubmit, error}) => {
    return (
     
          <form onSubmit={handleSubmit}>
            
          {CreateField("Email","email", [required], InputMy )}
          {CreateField("Password","password", [required], InputMy, {type: "password"} )}
          {CreateField(null, "remember", null, InputMy, {type: "checkbox"}, "remember me" )}    
                
                
               
                {error &&  <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div><Button value="Log In"/></div> 
           </form>  
        
    );
};


export default LoginForm;