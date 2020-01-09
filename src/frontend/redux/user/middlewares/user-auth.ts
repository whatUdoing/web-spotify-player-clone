import { Middleware } from 'redux'
import { userActionTypes, SET_USER_AUTH } from '../actions-types'
import { setUserLoading, setUserProfile, getUserPlaylists } from '../actions'
import { Container } from '../../../utils/classes/dependency-injector/dependency-injector'
import { IUserService } from 'services'

/**
 * This was the first concept, use middleware to dispatch another actions, later i change to experiment with
 * Event bus dispatched from reducers, which isnt redux dispatch action but morelikely information that something
 * happened.
 */
export const userAuth: Middleware = ({ dispatch }) => next => async (
	action: userActionTypes
) => {
	next(action)

	if (action.type === SET_USER_AUTH) {
		const isAuth = action?.payload?.auth?.isAuth

		if (isAuth) {
			const userService: IUserService = <IUserService>(
				Container.get('user-service')
			)

			dispatch(setUserLoading(true))

			const [profile, error] = await userService.getUserProfile()

			dispatch(setUserLoading(false))

			if (error) {
				/**
				 * todo: Handle errror
				 */
				console.log(error)
			}

			if (profile) {
				dispatch(setUserProfile(profile))
			}
		}
	}
}
