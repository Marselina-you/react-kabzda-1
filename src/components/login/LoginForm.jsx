import React from "react";
import { required } from "../../utils/validators/validators";
import Button from "../button/Button";
import { InputMy, CreateField } from "../common/formControls/FormsControls";
import s from './../common/formControls/FormsControls.module.css'



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
     
          <form onSubmit={handleSubmit}>
            
          {CreateField("Email","email", [required], InputMy )}
          {CreateField("Password","password", [required], InputMy, {type: "password"} )}
          {CreateField(null, "remember", null, InputMy, {type: "checkbox"}, "remember me" )}    
                
          {captchaUrl && <img src={captchaUrl}/>}
          {captchaUrl && CreateField('Symbols from image', 'captcha', [required], InputMy, {})}
               
                {error &&  <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div><Button value="Log In"/></div> 
           </form>  
        
    );
};


export default LoginForm;