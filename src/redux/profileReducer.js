import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [{
        id: 1,
        message: 'Hoy, it is 1 post',
        likesCount: 12
    },
    {
        id: 2,
        message: 'He, it is 2 post',
        likesCount: 12
    },
    {
        id: 3,
        message: 'o',
        likesCount: 1
    },
    {
        id: 4,
        message: 'o-hoh-ho',
        likesCount: 12
    },
    {
        id: 5,
        message: 'rom',
        likesCount: 2
    }
],
  
    profile: null,
    status: null

}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
            id: state.posts.length+1,
            message: action.newPostText,
            likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                
            }
           
        }
       case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            //debugger;
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            //debugger;
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            //debugger;
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
       
        default: 
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})//action creator
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getStatus = (profileId) => async(dispatch) => {
    let response = await  profileAPI.getStatus(profileId)
    
        //debugger;
        dispatch(setStatus(response.data))
    
}  
export const updateStatus = (status) => async(dispatch) => {
    let response = await  profileAPI.updateStatus(status)
   
        if ( response.data.resultCode === 0) {
            dispatch(setStatus(status))//передаем в  dispatch экшен
        }
        
    
} 
export const getProfileUsers = (profileId) => async(dispatch) =>{//getUsersThunkCreator
   
      let response = await  profileAPI.getProfileUsers(profileId)
    
            dispatch(setUserProfile(response.data))
       
}
export const savePhoto = (file) => async (dispatch) =>{//getUsersThunkCreator
   //debugger;
    let response = await  profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
          dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) =>{//getUsersThunkCreator
    //debugger;
    const userId = getState().auth.userId;
     let response = await  profileAPI.saveProfile(profile)
     if (response.data.resultCode === 0) {
           dispatch(getProfileUsers(userId))
     }
     else {
        
        dispatch(stopSubmit("edit-profile", {_error:  response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
       
    }
 }

export default profileReducer;
