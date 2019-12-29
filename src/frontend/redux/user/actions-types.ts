import { User, AuthObject } from 'types/user-service'

export const SET_USER_PROFILE = '[ user ] SET_USER_PROFILE'
export const SET_USER_AUTH = '[ user ] SET_USER_AUTH'
export const SET_USER_LOADING = '[ user ] SET_USER_LOADING'

interface ISetUserProfile {
	type: typeof SET_USER_PROFILE
	payload: {
		user: User
	}
}

interface ISetUserAuth {
	type: typeof SET_USER_AUTH
	payload: {
		auth: AuthObject
	}
}

interface ISetUserLoading {
	type: typeof SET_USER_LOADING
	payload: {
		isLoading: boolean
	}
}

export type userActionTypes = ISetUserProfile | ISetUserAuth | ISetUserLoading
