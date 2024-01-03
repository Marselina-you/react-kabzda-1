import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  //let state = props.store.getState();

  return (
    <StoreContext.Consumer>
        {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          let action = updatePostActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
