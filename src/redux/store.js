/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you', likesCount: 12},
				{id: 2, message: 'It\'s my first post', likesCount: 11},
				{id: 3, message: 'Blala', likesCount: 11},
				{id: 4, message: 'Dada', likesCount: 11}
			],
			newPostText: ''

		},
		dialogsPage: {

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
			],
			newMessageBody: ''

		},
		sidebar: {

			friends: [
				{name: 'Dimych'},
				{name: 'Andrey'},
				{name: 'Sveta'},
				{name: 'Sasha'},
				{name: 'Jony'},
				{name: 'Valera'}
			]

		}
	},

	_callSubscribe () {
		console.log(0);
	},

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscribe = observer;
    },

    dispatch (action) {
		this._state.profilePage = profileReducer (this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer (this._state.sidebar, action);

		this._callSubscribe(this._state);
	}

}

export default store;
window.store = store;
*/