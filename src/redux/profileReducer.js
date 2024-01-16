import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';

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
    status: "1"

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
        default: 
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})//action creator


export const getStatus = (profileId) => (dispatch) => {
    profileAPI.getStatus(profileId)
    .then(response => {
        //debugger;
        dispatch(setStatus(response.data))
    })
}  
export const updateStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(response.data))//передаем в  dispatch экшен
        }
        
    })
} 
export const getProfileUsers = (profileId) => {//getUsersThunkCreator
    return (dispatch) => {
        usersAPI.getProfileUsers(profileId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

export default profileReducer;
