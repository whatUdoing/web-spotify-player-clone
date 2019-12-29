import {
	SET_USER_AUTH,
	SET_USER_LOADING,
	SET_USER_PROFILE
} from './actions-types'
import { AuthObject } from 'types/user-service'
import { User } from 'types/user-service'

export const setUserAuth = (auth: AuthObject) => {
	return {
		type: SET_USER_AUTH,
		payload: {
			auth
		}
	}
}

export const setUserLoading = (isLoading: boolean) => {
	return {
		type: SET_USER_LOADING,
		payload: {
			isLoading
		}
	}
}

export const setUserProfile = (user: User) => {
	return {
		type: SET_USER_PROFILE,
		payload: {
			user
		}
	}
}
