import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm';
import { login } from '../../redux/authReducer.ts';
import { Navigate } from "react-router-dom";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formdata) => {

        props.login(formdata.email, formdata.password, formdata.rememberMe, formdata.captcha)//not thunk
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
        
    }
    return (
        <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})



export default connect( mapStateToProps, {login})(Login);