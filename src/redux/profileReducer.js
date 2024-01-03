const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
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
    newPostText: 'it-kamasutra'

}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_TEXT: 
            state.newPostText = action.newText;
            return state;

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
export default profileReducer;