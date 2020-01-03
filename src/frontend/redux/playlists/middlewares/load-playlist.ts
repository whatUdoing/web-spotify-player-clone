import { Middleware } from 'redux'
import { playlistsActionTypes, GET_PLAYLIST } from '../actions-types'
import { addPlaylist } from '../actions'
import { IPlaylistsService } from 'types/services'
import { Container } from '../../../utils/classes/dependency-injector'

export const loadPlaylist: Middleware = ({ dispatch }) => next => async (
	action: playlistsActionTypes
) => {
	next(action)

	if (action.type === GET_PLAYLIST) {
		console.log('GET_PLAYLIST')
		const PlaylistsService = Container.get(
			'playlists-service'
		) as IPlaylistsService

		const [playlist, error] = await PlaylistsService.getPlaylist(
			action.payload.playlistId
		)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (playlist) {
			dispatch(addPlaylist(playlist))
		}
	}
}
