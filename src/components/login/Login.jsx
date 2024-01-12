import React from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm';


const Login = () => {
    const onSubmit = (formdata) => {
        console.log(formdata)
    }
    return (
        <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)




export default Login;