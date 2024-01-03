const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {

      _state:  {
        pageMessages: {
            dialogs: [{
                id: 1,
                name: "Dimych",
                img: 'img.png'
            },
            {
                id: 2,
                name: "Valera",
                img: 'img.png'
            },
            {
                id: 3,
                name: "Manya",
                img: 'img.png'
            },
            {
                id: 4,
                name: "Sveta",
                img: 'img.png'
            },
            {
                id: 5,
                name: "Ahan",
                img: 'img.png'
            }
        ],
    
        messages: [{
                id: 1,
                content: "hey"
            },
            {
                id: 2,
                content: "hoy"
            },
            {
                id: 3,
                content: "huy"
            },
            {
                id: 4,
                content: "hay"
            },
            {
                id: 5,
                content: "hoooyyyy"
            }
        ],
        newMessageText: "It's my first message!"
        },
        profilePage: {
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
   
    },
    getState() {
       
        return this._state;
    },
   _rerenderEntireTree() {
        console.log('kuku')
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                content: this._state.pageMessages.newMessageText,
            }
            this._state.pageMessages.messages.push(newMessage);
            this._state.pageMessages.newMessageText = '';
            this._rerenderEntireTree(this._state)
        }
        else if (action.type === UPDATE_MESSAGE) {
            this._state.pageMessages.newMessageText = action.newText;
            this._rerenderEntireTree(this._state)
        }
    },
    
   
   
    
   
   
    
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE, newText: text
    }
}
  
export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT, newText: text
    }
}
export default store;
