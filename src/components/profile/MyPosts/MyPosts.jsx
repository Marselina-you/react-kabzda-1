import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css'
import Button from '../../button/Button';
import posts from '../../../data.js';



const MyPosts = () => {
    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div className={classes.addPost}>
                <div>
                <textarea></textarea>
                </div>
               <Button value="add post"/>
            </div>
           
         { postsElement }
        </div>
    );
};



export default MyPosts;
/*
Ну вообще для bll и ui, есть определение в рамках шаблона mvc (model, view). 
Модель и представление. А данные это состояние (State). Нужно сразу вводить терминологию, 
что бы привыкали. А в дальнейшем с появлением в ваших уроках редакса вообще все станет на свои места. 
Model (redux), View(react), Controller(react-redux). Потом можно в рамках данной терминологии 
перейти к MVP и MVVM.
*/