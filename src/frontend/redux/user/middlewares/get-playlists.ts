import { Middleware } from 'redux'
import { userActionTypes, GET_USER_PLAYLISTS } from '../actions-types'
import { Container } from '../../../utils/classes/dependency-injector'
import { IUserService } from 'types/services'
import { setCurrUserPlaylists } from '../actions'

export const getPlaylists: Middleware = ({ dispatch }) => next => async (
	action: userActionTypes
) => {
	next(action)

	if (action.type === GET_USER_PLAYLISTS) {
		const userService: IUserService = Container.get(
			'user-service'
		) as IUserService

		const [playlists, error] = await userService.getUserPlaylists()

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (playlists) {
			dispatch(setCurrUserPlaylists(playlists))
		}
	}
}
