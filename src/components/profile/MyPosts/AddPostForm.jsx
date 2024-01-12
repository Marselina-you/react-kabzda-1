import React from 'react';
import Button from '../../button/Button';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formControls/FormsControls';

const maxLength = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={Textarea} placeholder={'Post Message'}  name="newPostText" validate={[required, maxLength]}/>
        </div>
        <Button value="add post"/>
       </form>
    );
};

export default AddPostForm;
