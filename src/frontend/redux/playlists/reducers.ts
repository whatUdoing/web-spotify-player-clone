import { playlistsActionTypes, ADD_PLAYLIST } from './actions-types'
import { combineReducers } from 'redux'
import { PlaylistsStateShape } from 'types/redux'

const initialState: PlaylistsStateShape = {
	playlists: {}
}

const playlistsReducer = (
	playlists = initialState.playlists,
	action: playlistsActionTypes
) => {
	switch (action.type) {
		case ADD_PLAYLIST:
			const playlist = action.payload.playlist
			return {
				...playlists,
				[playlist.id]: playlist
			}

		default:
			return playlists
	}
}

export default combineReducers({
	playlists: playlistsReducer
})
