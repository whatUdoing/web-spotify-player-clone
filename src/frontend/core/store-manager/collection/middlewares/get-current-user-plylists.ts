import { Middleware } from 'redux'
import { GET_PLAYLISTS, collectionActionTypes } from '../actions-types'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { IUserService } from 'services'
import { addPlaylists } from '../actions'
import { RootStateShape } from 'redux-store'

export const getCurrentUserPlaylists: Middleware = ({
	dispatch,
	getState
}) => next => async (action: collectionActionTypes) => {
	next(action)

	// add load more
	if (action.type === GET_PLAYLISTS) {
		const state: RootStateShape = getState()
		const currPlaylists = state.collection.playlists.paging
		let queryParams = {}

		if (currPlaylists) {
			queryParams = {
				...queryParams,
				offset: currPlaylists.offset + currPlaylists.items.length
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
			dispatch(addPlaylists(playlists))
		}
	}
}
