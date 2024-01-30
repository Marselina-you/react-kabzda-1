import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/profileReducer";
import { AppStateType } from "../../../redux/redux-store";
//import {addPostActionCreator} from "../../../redux/profileReducer.ts";
import MyPosts,  {DispatchPropsType, MapPropsType} from "./MyPosts";



const mapStateToProps = (state: AppStateType) => {
    return {
      posts: state.profilePage.posts,
      
      
    }
  }
  const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;
