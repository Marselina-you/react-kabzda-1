import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css'


const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <input type='text'/>
            <button>add</button>
            <button>remove</button>
           <Post message='Hoy, it is 1 post' likesCount='2'/>
           <Post message='He, it is 2 post' likesCount='3'/>
        </div>
    );
};



export default MyPosts;