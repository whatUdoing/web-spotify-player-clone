import { Middleware } from 'redux'
import { playlistsActionTypes, GET_PLAYLIST_TRACKS } from '../actions-types'
import { setNewTracksObject } from '../actions'
import { IPlaylistsService } from 'types/services'
import { Container } from '../../../utils/classes/dependency-injector'
import { RootStateShape } from 'redux/reducers'
import { PagingTrackObject } from 'types/redux'

export const loadMorePlaylistTracks: Middleware = ({
	dispatch,
	getState
}) => next => async (action: playlistsActionTypes) => {
	next(action)

	if (action.type === GET_PLAYLIST_TRACKS) {
		const state: RootStateShape = getState()
		const playlistId = action.payload.playlistId
		const playlist = state.playlists.playlists[playlistId]
		const currTrackObjct = <PagingTrackObject>playlist.tracks
		let allLoaded = false
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
			dispatch(
				setNewTracksObject(
					playlistId,
					trackObject,
					!currTrackObjct.next
				)
			)
		}
	}
}
