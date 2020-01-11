import { playlistsActionTypes, ADD_PLAYLIST, ADD_TRACKS } from './actions-types'
import { combineReducers } from 'redux'
import {
	PlaylistsStateShape,
	PagingTrackObject,
	PlaylistTrackObject
} from 'redux-store'

const initialState: PlaylistsStateShape = {
	playlists: {}
}

const playlistsReducer = (
	playlists = initialState.playlists,
	action: playlistsActionTypes
) => {
	switch (action.type) {
		case ADD_PLAYLIST: {
			const playlist = action.payload.playlist
			const tracks = <PagingTrackObject<PlaylistTrackObject>>(
				playlist.tracks
			)
			tracks.allLoaded = !tracks.next

			playlists[playlist.id] = playlist
			return {
				...playlists,
				[playlist.id]: playlist
			}
		}

		case ADD_TRACKS: {
			const playlistId = action.payload.playlistId
			const playlist = playlists[playlistId]

			const previousTracks = playlist.tracks.items
			const newTracks = action.payload.trackObject
			newTracks.items = [...previousTracks, ...newTracks.items]
			newTracks.allLoaded = !newTracks.next

			return {
				...playlists,
				[playlist.id]: {
					...playlist,
					tracks: newTracks
				}
			}
		}
		default:
			return playlists
	}
}

export default combineReducers({
	playlists: playlistsReducer
})
