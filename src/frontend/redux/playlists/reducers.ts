import { playlistsActionTypes, ADD_PLAYLIST, ADD_TRACKS } from './actions-types'
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

			playlists[playlist.id] = playlist
			return {
				...playlists,
				[playlist.id]: playlist
			}

		case ADD_TRACKS:
			const playlistId = action.payload.playlistId

			playlists[playlistId].tracks = action.payload.trackObject
			return playlists
		default:
			return playlists
	}
}

export default combineReducers({
	playlists: playlistsReducer
})
