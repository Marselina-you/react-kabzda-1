import React from 'react';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import Button from '../button/Button';
import { Textarea } from '../common/formControls/FormsControls';


let maxLength4 = maxLengthCreator(4)
const AddMessageForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
           <Field component={Textarea} placeholder="enter text" name={"newMessageBody"} 
           validate={[required, maxLength4]}/>
      <Button  value="add"/>  
        </form>
    );
};




export default AddMessageForm;