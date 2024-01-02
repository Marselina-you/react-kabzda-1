let rerenderEntireTree = () => {
    console.log('state')
}

let state = {
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
  
   


}
export let addPost = () => {
    
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export let addMessage = () => {
    let newMessage = {
        id: 7,
        content: state.pageMessages.newMessageText
    }
    state.pageMessages.messages.push(newMessage);
    state.pageMessages.newMessageText = '';
    rerenderEntireTree(state)
}
export const updateMessage = (ext) => {
    state.pageMessages.newMessageText = ext;
    rerenderEntireTree(state)
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;