import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../components/types/types";

//import { PostType } from "../components/types/types";
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



let initialState = {
    posts: [{id: 1, message: 'Hoy, it is 1 post', likesCount: 12},
    {id: 2, message: 'He, it is 2 post', likesCount: 12},
    { id: 3, message: 'o', likesCount: 1},
    { id: 4, message: 'o-hoh-ho', likesCount: 12},
    { id: 5, message: 'rom', likesCount: 2}
] as Array<PostType>,
  
    profile: null as ProfileType | null,
    status: ''

}
export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType}
        }
       
        default: 
            return state;
    }
}
type addPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => ({type: ADD_POST, newPostText})
type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType):setUserProfileType => ({type: SET_USER_PROFILE, profile })
type setStatusType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})//action creator
type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessType  => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getProfileUsers = (profileId: number) => async(dispatch: any) =>{//getUsersThunkCreator
   
    let response = await  profileAPI.getProfileUsers(profileId)
  
          dispatch(setUserProfile(response.data))
     
}

export const getStatus = (profileId: number) => async(dispatch: any) => {
    let response = await  profileAPI.getStatus(profileId)
    
        //debugger;
        dispatch(setStatus(response.data))
    
}  
export const updateStatus = (status: string) => async(dispatch: any) => {
    try {
        let response = await  profileAPI.updateStatus(status)
   
        if ( response.data.resultCode === 0) {
            dispatch(setStatus(status))//передаем в  dispatch экшен
        }
    }
    catch (error) {
        //
    }
    
} 

export const savePhoto = (file: File) => async (dispatch: any) =>{//getUsersThunkCreator
   //debugger;
    let response = await  profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
          dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState) =>{//getUsersThunkCreator
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
