import React from 'react';
import { reduxForm } from 'redux-form';
import Button from '../../button/Button';
import { CreateField, InputMy, Textarea } from './FormsControls';
import s from '../../common/formControls/FormsControls.module.css'


const ProfileDataForm = ({handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Button value='save'/>
            {error && <div className={s.formSummaryError}>
            {error}
        </div>
        } 
          
            <div>
                {CreateField('full name', 'fullName', null, InputMy) }</div>

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

const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux;