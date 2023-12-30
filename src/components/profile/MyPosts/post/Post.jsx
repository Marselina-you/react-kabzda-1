import React from 'react';
import classes from './Post.module.css'
import chef from './chef.jpg'



const Post = (props) => {
    
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.itemImg}>
                    <img src={chef} alt='chef'/>
                </div>
                
                <div className={classes.post}>
                        { props.message }
                </div>
                <div>
                    <span className={classes.like}>{ props.likesCount }</span> 
                </div>
            </div> 
        </div>
    );
};



export default Post;