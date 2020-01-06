import { Middleware } from 'redux'
import { playlistsActionTypes, GET_PLAYLIST_TRACKS } from '../actions-types'
import { addTracks } from '../actions'
import { IPlaylistsService } from 'types/services'
import { Container } from '../../../utils/classes/dependency-injector/dependency-injector'
import { RootStateShape, PlaylistTrackObject } from 'types/redux'
import { PagingTrackObject } from 'types/redux'

export const getMorePlaylistTracks: Middleware = ({
	dispatch,
	getState
}) => next => async (action: playlistsActionTypes) => {
	next(action)

	if (action.type === GET_PLAYLIST_TRACKS) {
		const state: RootStateShape = getState()
		const playlistId = action.payload.playlistId
		const playlist = state.playlists.playlists[playlistId]
		const currTrackObjct = <PagingTrackObject<PlaylistTrackObject>>(
			playlist.tracks
		)
		// console.log('get more tracks', action.payload.playlistId)
		// console.log(currTrackObjct)
		if (currTrackObjct.allLoaded) {
			return
		}

		const PlaylistsService = Container.get(
			'playlists-service'
		) as IPlaylistsService

		const [trackObject, error] = await PlaylistsService.getPlaylistTracks(
			playlist
		)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (trackObject) {
			// console.log('playlistId', playlistId)
			// console.log('track ob', trackObject)
			dispatch(addTracks(playlistId, trackObject))
		}
	}
}
