import { Middleware } from 'redux'
import { albumsActionTypes, GET_ALBUM_TRACKS } from '../actions-types'
import { addTracks } from '../actions'
import {
	IPlaylistsService,
	TrackObjectSimplified,
	IAlbumsService
} from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { RootStateShape, PlaylistTrackObject } from 'redux-store'
import { PagingTrackObject } from 'redux-store'

export const getAlbumTracks: Middleware = ({
	dispatch,
	getState
}) => next => async (action: albumsActionTypes) => {
	next(action)

	if (action.type === GET_ALBUM_TRACKS) {
		console.log('get album tracks')
		const state: RootStateShape = getState()
		const albumId = action.payload.albumId
		const albums = state.albums.albums[albumId]
		const currTrackObjct = <PagingTrackObject<TrackObjectSimplified>>(
			albums.tracks
		)
		// console.log('get more tracks', action.payload.playlistId)
		// console.log(currTrackObjct)
		if (currTrackObjct.allLoaded) {
			return
		}

		const AlbumServices = Container.get('albums-service') as IAlbumsService

		const [trackObject, error] = await AlbumServices.getAlbumTracks(albums)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (trackObject) {
			// console.log('playlistId', playlistId)
			// console.log('track ob', trackObject)
			dispatch(addTracks(albumId, trackObject))
		}
	}
}
