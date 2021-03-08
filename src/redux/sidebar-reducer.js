let initialState = {

    friends: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Sasha', id: 4},
        {name: 'Jony', id: 5},
        {name: 'Valera', id: 6}
    ]

}

const sidebarReducer = (state = initialState, action) => {
    //let newState = {...state}; newState.friends = {...state.friends}; return newState;
    return state;
}

export default sidebarReducer;