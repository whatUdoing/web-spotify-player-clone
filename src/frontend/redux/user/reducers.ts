import { User, AuthObject } from 'types/user-service'
import {
	userActionTypes,
	SET_USER_PROFILE,
	SET_USER_AUTH,
	SET_USER_LOADING
} from './actions-types'
import { combineReducers } from 'redux'
import { Container } from '../../utils/classes/dependency-injector'
import { IObserver } from 'types/observer'
import { UserAuthenticatedEvent } from './events/event-user-auth'

export type UserStateShape = {
	auth: AuthObject
	profile: User | null
	isLoading: boolean
}

const initialState: UserStateShape = {
	auth: {
		isAuth: false
	},
	profile: null,
	isLoading: false
}

const UserReducer = (
	profile = initialState.profile,
	action: userActionTypes
) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return action.payload.user

		default:
			return profile
	}
}

const AuthReducer = (auth = initialState.auth, action: userActionTypes) => {
	const EventBus = <IObserver>Container.get('event-bus')

	switch (action.type) {
		case SET_USER_AUTH: {
			const isAuth = action.payload.auth

			/**
			 * Concept more details in subscribers/index
			 */
			// if (isAuth) {
			// 	requestAnimationFrame(() => {
			// 		EventBus.dispatch(UserAuthenticatedEvent, true)
			// 	})
			// }

			return isAuth
		}

		default:
			return auth
	}
}

const LoadingReducer = (
	isLoading = initialState.isLoading,
	action: userActionTypes
) => {
	switch (action.type) {
		case SET_USER_LOADING: {
			return action.payload.isLoading
		}

		default:
			return isLoading
	}
}

export default combineReducers({
	auth: AuthReducer,
	user: UserReducer,
	isLoading: LoadingReducer
})
