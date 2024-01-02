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
    _callSubscriber() {
        console.log()
    },
    addPost() {
        
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
        
    },
    updateNewText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },
    addMessage(){
        let newMessage = {
            id: 7,
            content: this._state.pageMessages.newMessageText
        }
        this._state.pageMessages.messages.push(newMessage);
        this._state.pageMessages.newMessageText = '';
        this._rerenderEntireTree(this._state)
    },
    updateMessage(ext) {
        this._state.pageMessages.newMessageText = ext;
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    }
   
    
}

export default store;
window.store = store;