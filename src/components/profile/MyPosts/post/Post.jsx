import React from 'react';
import classes from './Post.module.css'
import chef from './chef.jpg'



const Post = (props) => {
    
    return (
        <div>
             <div className={classes.item}>
             <img src={chef} alt='chef'/>
         { props.message }
        
        
        <div>
        <span>{ props.likesCount }</span> 
        </div>
        
         
        
        </div> 
        </div>
    );
};



export default Post;