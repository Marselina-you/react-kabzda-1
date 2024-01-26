import profileReducer, { actions } from "./profileReducer";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: '',
};

it ('length of  post should be added', () => {
    //1.test data
    let action = actions.addPostActionCreator("it-camasutra");
    
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect (newState.posts.length).toBe(6);
    
    
})
it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[5].message).toBe("it-kamasutra.com");
});
it('after deletintg length of message should be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('update status', () => {
    // 1. test data
    let action = actions.setStatus("kuku");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.status).toBe("kuku");
   
});
