const SEND_MESSAGE = 'itk/dialogsPage/SEND-MESSAGE';

let initialState = {

    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Jony'},
        {id: 6, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: 'Hi', whoSays: 'I'},
        {id: 2, message: 'How are you', whoSays: 'friend'},
        {id: 3, message: 'Yo', whoSays: 'I'},
        {id: 4, message: 'Yo', whoSays: 'friend'},
        {id: 5, message: 'Yo', whoSays: 'I'}
    ]

}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            let newMessage = {
                id: 6,
                message: body,
                whoSays: 'I'
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;