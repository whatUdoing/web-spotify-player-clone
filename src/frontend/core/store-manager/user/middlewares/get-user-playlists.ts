import { Middleware } from 'redux'
import { userActionTypes, GET_USER_PLAYLISTS } from '../actions-types'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { IUserService } from 'services'
import { setUserPlaylists } from '../actions'
import { RootStateShape } from 'redux-store'

export const getCurrentUserPlaylists: Middleware = ({
	dispatch,
	getState
}) => next => async (action: userActionTypes) => {
	next(action)

	// add load more
	if (action.type === GET_USER_PLAYLISTS) {
		const state: RootStateShape = getState()
		const currPlaylists = state.user.currentUserPlaylists
		let queryParams = {}

		if (currPlaylists) {
			queryParams = {
				...queryParams,
				offset: currPlaylists.offset + currPlaylists.limit
			}
		}

		const userService: IUserService = Container.get(
			'user-service'
		) as IUserService

		const [playlists, error] = await userService.getCurrentUserPlaylists(
			queryParams
		)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (playlists) {
			dispatch(setUserPlaylists(playlists))
		}
	}
}
