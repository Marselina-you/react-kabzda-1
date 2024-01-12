import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css';
import AddPostForm from './AddPostForm';
import { reduxForm } from 'redux-form';
//import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';






const MyPosts = (props) => {
  
    const addPost = (values) => {
        props.addPost(values.newPostText)//addPost from mypostscontainer
    }
   
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    
return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
           <AddPostReduxForm onSubmit={addPost}/>
           { postsElement }
        </div>
    );
};

const AddPostReduxForm = reduxForm({form: 'addForm'})(AddPostForm)

export default MyPosts;
/*
Ну вообще для bll и ui, есть определение в рамках шаблона mvc (model, view). 
Модель и представление. А данные это состояние (State). Нужно сразу вводить терминологию, 
что бы привыкали. А в дальнейшем с появлением в ваших уроках редакса вообще все станет на свои места. 
Model (redux), View(react), Controller(react-redux). Потом можно в рамках данной терминологии 
перейти к MVP и MVVM.
*/