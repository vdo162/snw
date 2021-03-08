import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blala', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]};

it('Length of posts should be incremented', () => {
	//1. Test data
	let action = addPost('I`m live...');
    //2. Action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

it('Message of new post should be correct', () => {
	//1. Test data
	let action = addPost('I`m love...');
    //2. Action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[4].message).toBe('I`m love...');
});

it('After deleting length of posts should be decrement', () => {
    //1. Test date
    let action = deletePost(1);
    //2. Action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it('After deleting length of posts shouldn`t be decrement, if id is incorrect', () => {
    //1. Test date
    let action = deletePost(1000);
    //2. Action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});