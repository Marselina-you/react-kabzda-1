import React from "react";
import { Field } from "redux-form";
import Button from "../button/Button";




const LoginForm = (props) => {
    return (
     
          <form onSubmit={props.handleSubmit}>
            
                <div><Field placeholder={"Login"} name={"login"} component={"input"}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
                <div><Field  component={"input"} name={"remember"} type={"checkbox"}/>remember me</div>
                <div><Button value="Log In"/></div>
           </form>  
        
    );
};


export default LoginForm;