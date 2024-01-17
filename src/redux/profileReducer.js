import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
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
        default: 
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})//action creator
export const deletePost = (postId) => ({type: DELETE_POST, postId})


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

export default profileReducer;
