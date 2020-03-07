import { combineReducers } from 'redux'
import {
	ADD_PLAYLISTS,
	REMOVE_PLAYLISTS,
	collectionActionTypes
} from './actions-types'
import { CollectionStateShape } from 'redux-store'

/**
 * To think, move all tracks here, instead keeping them seprate in playlist, albums etc...
 * Pros: we wont be keeping same track x - times, np i album and playlist
 * Cons: we need to manage tracks separetly here, for ex sould we clean them if
 * user destroy playlist :?
 */

const inittialState: CollectionStateShape = {
	playlists: {
		items: [],
		paging: null
	},
	tracks: null,
	albums: null,
	artists: null
}

const playlistsReducers = (
	playlists = inittialState.playlists,
	action: collectionActionTypes
) => {
	switch (action.type) {
		case ADD_PLAYLISTS:
			return {
				items: [
					...playlists.items,
					...action.payload.playlistsPagging.items
				],
				paging: action.payload.playlistsPagging
			}
		case REMOVE_PLAYLISTS:
			return {
				items: [],
				paging: null
			}
		default:
			return playlists
	}
}

const tracksReducers = (
	tracks = inittialState.tracks,
	action: collectionActionTypes
) => {
	switch (action.type) {
		default:
			return tracks
	}
}

const albumsReducers = (
	albums = inittialState.albums,
	action: collectionActionTypes
) => {
	switch (action.type) {
		default:
			return albums
	}
}

const artistsReducers = (
	artists = inittialState.artists,
	action: collectionActionTypes
) => {
	switch (action.type) {
		default:
			return artists
	}
}

export default combineReducers({
	tracks: tracksReducers,
	playlists: playlistsReducers,
	albums: albumsReducers,
	artists: artistsReducers
})
