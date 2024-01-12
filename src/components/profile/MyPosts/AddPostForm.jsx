import React from 'react';
import Button from '../../button/Button';
import { Field } from 'redux-form';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={'textarea'} type={'textarea'} name="newPostText"/>
        </div>
        <Button value="add post"/>
       </form>
    );
};

export default AddPostForm;
//<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />