import { FormAction, stopSubmit } from "redux-form";
import { ProfileType, PhotosType, PostType, } from "../components/types/types";
import { profileAPI } from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from './redux-store';


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


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch(action.type) {
        case 'ADD_POST': {
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
       case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            //debugger;
            return {...state, status: action.status}
        }
        case 'DELETE_POST': {
            //debugger;
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'SAVE_PHOTO_SUCCESS': {
            //debugger;
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType}
        }
       
        default: 
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'ADD_POST', newPostText}as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile }as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status}as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId}as const),
    savePhotoSuccess: (photos: PhotosType)  => ({type: 'SAVE_PHOTO_SUCCESS', photos}as const)
}

export const getProfileUsers = (profileId: number): ThunkType => async(dispatch) =>{//getUsersThunkCreator
   
    let data = await  profileAPI.getProfileUsers(profileId)
  
          dispatch(actions.setUserProfile(data))
     
}

export const getStatus = (profileId: number): ThunkType => async(dispatch) => {
    let data = await  profileAPI.getStatus(profileId)
    dispatch(actions.setStatus(data))
}  
export const updateStatus = (status: string): ThunkType => async(dispatch) => {
    try {
        let data = await  profileAPI.updateStatus(status)
   
        if ( data.resultCode === 0) {
            dispatch(actions.setStatus(status))//передаем в  dispatch экшен
        }
    }
    catch (error) {
        //
    }
    
} 

export const savePhoto = (file: File): ThunkType => async (dispatch) =>{//getUsersThunkCreator
   //debugger;
    let data = await  profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
          dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) =>{//getUsersThunkCreator
    //debugger;
    const userId = getState().auth.userId;
     let data = await  profileAPI.saveProfile(profile)
     if (data.resultCode === 0) {
        if (userId!= null) {
            dispatch(getProfileUsers(userId))
        }
        else {
            throw new Error("userId can't be null")
        }
           
     }
     else {
        
        dispatch(stopSubmit("edit-profile", {_error:  data.messages[0] }))
        return Promise.reject(data.messages[0])
       
    }
 }

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
