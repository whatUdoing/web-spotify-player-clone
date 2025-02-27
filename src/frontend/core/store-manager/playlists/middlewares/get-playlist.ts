import { Middleware } from 'redux'
import { playlistsActionTypes, GET_PLAYLIST } from '../actions-types'
import { addPlaylist } from '../actions'
import { IPlaylistsService } from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'

export const getPlaylist: Middleware = ({ dispatch }) => next => async (
	action: playlistsActionTypes
) => {
	next(action)

	if (action.type === GET_PLAYLIST) {
		const UserService = Container.get('user-service') as IPlaylistsService

		const [playlist, error] = await UserService.getPlaylist(
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
