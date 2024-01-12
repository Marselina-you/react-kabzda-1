import React from "react";
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import Button from "../button/Button";
import { InputMy } from "../common/formControls/FormsControls";




const LoginForm = (props) => {
    return (
     
          <form onSubmit={props.handleSubmit}>
          
                <div><Field placeholder={"Login"} name={"login"} component={InputMy} validate={[required]}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={InputMy}  validate={[required]}/></div>
                <div><Field  component={InputMy} name={"remember"} type={"checkbox"}/>remember me</div>
                <div><Button value="Log In"/></div>
           </form>  
        
    );
};


export default LoginForm;