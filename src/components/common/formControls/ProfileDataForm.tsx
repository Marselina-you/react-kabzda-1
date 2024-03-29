import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import Button from '../../button/Button';
import { CreateField, InputMy, GetStringKeys, Textarea } from './FormsControls';
import s from '../../common/formControls/FormsControls.module.css'
import { ProfileType } from '../../types/types';

type PropsType = {
    profile: ProfileType
    
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Button value='save'/>
            {error && <div className={s.formSummaryError}>
            {error}
        </div>
        } 
          
            <div>
                {CreateField<ProfileTypeKeys>('full name', 'fullName', [], InputMy) }</div>

        <div><b>job: </b>{CreateField('', "lookingForAJob", [], InputMy, {type: "checkbox"})}</div>
        <div>My professional skills:
        {CreateField('text', "lookingForAJobDescription", [], Textarea)}</div>
       <div>
        <b>About me:</b>
        {CreateField('About me', "aboutMe", [], Textarea)}
       </div>
       <div>
        <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
             return <div key={key}>
                <b>{key}: {CreateField(key, "contacts." + key, [], InputMy)}</b>
             </div>
             
        })}
       </div>
      
     
     
        </form>
    );
};

const ProfileDataFormRedux = reduxForm<ProfileType, PropsType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux;