import { Dispatch } from 'redux'
import { EventObject } from 'types/observer'
import { IUserService } from 'types/user-service'
import { Container } from '../../../utils/classes/dependency-injector'
import { setUserLoading, setUserProfile } from '../actions'

export const userAuthenticated = (dispatch: Dispatch) => async (
	event: EventObject
) => {
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
