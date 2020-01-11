import { User, AuthObject } from 'services'

export const SET_CURRENT_USER = '[ app ] SET_CURRENT_USER'
export const SET_AUTH = '[ app ] SET_AUTH'
export const SET_APP_LOADING = '[ app ] SET_APP_LOADING'

interface ISetCurrentUser {
	type: typeof SET_CURRENT_USER
	payload: {
		user: User
	}
}

interface ISetAuth {
	type: typeof SET_AUTH
	payload: {
		auth: AuthObject
	}
}

interface ISetUserLoading {
	type: typeof SET_APP_LOADING
	payload: {
		isLoading: boolean
	}
}

export type userActionTypes = ISetAuth | ISetUserLoading | ISetCurrentUser
