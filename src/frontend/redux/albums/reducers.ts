import { combineReducers } from 'redux'
import {
	ADD_ALBUM,
	REMOVE_ALBUM,
	ADD_TRACKS,
	albumsActionTypes
} from './actions-types'
import {
	AlbumsStateShape,
	PagingTrackObject,
	PlaylistTrackObject
} from 'types/redux'
import { TrackObjectSimplified } from 'types/services'

const inittialState: AlbumsStateShape = {
	albums: {}
}

const albumReducers = (
	albums = inittialState.albums,
	action: albumsActionTypes
) => {
	switch (action.type) {
		case ADD_ALBUM:
			const album = action.payload.album
			const tracks = <PagingTrackObject<TrackObjectSimplified>>(
				album.tracks
			)
			tracks.allLoaded = !tracks.next

			return {
				...albums,
				[album.id]: album
			}

		case ADD_TRACKS: {
			const albumId = action.payload.albumId
			const album = albums[albumId]

			const previousTracks = album.tracks.items
			const newTracks = action.payload.trackObject
			newTracks.items = [...previousTracks, ...newTracks.items]
			newTracks.allLoaded = !newTracks.next

			return {
				...albums,
				[album.id]: {
					...album,
					tracks: newTracks
				}
			}
		}

		case REMOVE_ALBUM:
			Reflect.deleteProperty(albums, action.payload.albumId)

			return {
				...albums
			}
		default:
			return albums
	}
}

export default combineReducers({
	albums: albumReducers
})
