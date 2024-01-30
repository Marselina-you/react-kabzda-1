import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css';
import AddPostForm, {AddPostFormValuesType} from './AddPostForm';
import {PostType} from '../../types/types';


export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
   
        const onAddPost = (values: AddPostFormValuesType) => {
           props.addPost(values.newPostText)//addPost from mypostscontainer
        }
       
        let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
        
    return (
            <div className={classes.postsBlock}>
                <h3>My Posts</h3>
               <AddPostForm onSubmit={onAddPost}/>
               { postsElement }
            </div>
        );
    
 }


 const MyPostsMemorized = React.memo(MyPosts);

 export default MyPostsMemorized;
 
/*
Ну вообще для bll и ui, есть определение в рамках шаблона mvc (model, view). 
Модель и представление. А данные это состояние (State). Нужно сразу вводить терминологию, 
что бы привыкали. А в дальнейшем с появлением в ваших уроках редакса вообще все станет на свои места. 
Model (redux), View(react), Controller(react-redux). Потом можно в рамках данной терминологии 
перейти к MVP и MVVM.
*/