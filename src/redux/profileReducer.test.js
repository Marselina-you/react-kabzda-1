import profileReducer, { addPostActionCreator, deletePost, setStatus, updateStatus } from "./profileReducer";


let state = {
    posts: [{id: 1, message: 'Hoy, it is 1 post', likesCount: 12
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
status: "1"
}
;
it ('length of  post should be added', () => {
    //1.test data
    let action = addPostActionCreator("it-camasutra");
    
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect (newState.posts.length).toBe(6);
    
    
})
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[5].message).toBe("it-kamasutra.com");
});
it('after deletintg length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
// it('after deletintg length incorrect', () => {
//     // 1. test data
//     let action = updateStatus(1000);

//     // 2. action
//     let newState = profileReducer(state, action);

//     // 3. expectation
//     expect(newState.posts.length).toBe(4);
// });
it('update status', () => {
    // 1. test data
    let action = setStatus("kuku");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.status).toBe("kuku");
   
});
