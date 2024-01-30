import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import Button from '../button/Button';
import { CreateField, Textarea } from '../common/formControls/FormsControls';
import { NewMessageFormValuesType } from './Dialogs';

type PropsType = {

}
let maxLength4 = maxLengthCreator(6)
type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            {CreateField<NewMessageFormValuesKeysType>("enter text", "newMessageBody", [required, maxLength4], Textarea)}
         
      <Button  value="add"/>  
        </form>
    );
};

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);