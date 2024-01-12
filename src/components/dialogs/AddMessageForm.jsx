import React from 'react';
import { Field } from 'redux-form';

import Button from '../button/Button';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
           <Field component={'textarea'} placeholder="enter text" name={"newMessageBody"} />
      <Button  value="add"/>  
        </form>
    );
};




export default AddMessageForm;