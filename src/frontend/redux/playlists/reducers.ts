import { playlistsActionTypes, SET_CURR_USER_PLAYLISTS } from './actions-types'
import { combineReducers } from 'redux'

const initialState = {
	playlists: {},

	currentUserPlaylists: {}
}

const playlistsReducer = (
	currentUserPlaylists = initialState.currentUserPlaylists,
	action: playlistsActionTypes
) => {
	switch (action.type) {
		case SET_CURR_USER_PLAYLISTS:
			console.log('pagging', action.payload.playlistsPaging)
			return action.payload.playlistsPaging

		default:
			return currentUserPlaylists
	}
}

export default combineReducers({
	currentUserPlaylists: playlistsReducer
})
