import React from 'react';
import Button from '../../button/Button';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { CreateField,  GetStringKeys, InputMy } from '../../common/formControls/FormsControls';

type PropsType = {

}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>
// const maxLength = maxLengthCreator(10)
const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        { CreateField<AddPostFormValuesTypeKeys>("Your post", 'newPostText', [required], InputMy) }
        </div>
        <Button value="add post"/>
       </form>
    );
};

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'addForm'})(AddPostForm)
