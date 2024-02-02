import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { InputMy, CreateField, GetStringKeys } from "../common/formControls/FormsControls"
import { login } from '../../redux/authReducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from '../../redux/redux-store';
import { required } from "../../utils/validators/validators"
import Button from "../button/Button"
import s from './../common/formControls/FormsControls.module.css'
import {useDispatch, useSelector} from 'react-redux'

type LoginFormOwnProps = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps< LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
     
          <form onSubmit={handleSubmit}>
            
          {CreateField<LoginFormValuesTypeKeys>("Email","email", [required], InputMy )}
          {CreateField<LoginFormValuesTypeKeys>("Password","password", [required], InputMy, {type: "password"} )}
          {CreateField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], InputMy, {type: "checkbox"}, "remember me" )}    
                
          {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
          {captchaUrl && CreateField('Symbols from image', 'captcha', [required], InputMy, {})}
               
                {error &&  <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div><Button value="Log In"/></div> 
           </form>  
        
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type LoginFormValuesType = {
    
    email: string
    password: string
    rememberMe: boolean
    captcha: string
    
   
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>


export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch: any = useDispatch()

    const onSubmit = (formdata: LoginFormValuesType) => {

        dispatch(login(formdata.email, formdata.password, formdata.rememberMe, formdata.captcha)) //not thunk
    }
    if (isAuth) {
        return <Navigate to={"/profile"}/>
        
    }
    return (
        <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};

