import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css';
import cs from '../../button/Button.module.css';
//import Button from '../../button/Button';






const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        
        
        props.addPost();
        
       
    }
    let postsElement = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewText(text)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div className={classes.addPost}>
                <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
               {/*<Button value="add post"/>*/}
               <button className={cs.btn} onClick={ addPost }>Add Post</button> 
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