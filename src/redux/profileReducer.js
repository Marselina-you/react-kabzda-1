const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
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
    newPostText: 'it-kamasutra',
    profile: null

}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
            id: state.posts.length+1,
            message: state.newPostText,
            likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
                
            }
           
        }
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default: 
            return state;
    }

   
   
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export default profileReducer;