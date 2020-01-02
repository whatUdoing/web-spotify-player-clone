import { User, AuthObject } from 'types/services'

export const SET_USER_PROFILE = '[ user ] SET_USER_PROFILE'
export const SET_USER_AUTH = '[ user ] SET_USER_AUTH'
export const SET_USER_LOADING = '[ user ] SET_USER_LOADING'
export const GET_USER_PLAYLISTS = '[ user ] GET_USER_PLAYLISTS'

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

interface IGetUserPlaylists {
	type: typeof GET_USER_PLAYLISTS
}

export type userActionTypes =
	| ISetUserProfile
	| ISetUserAuth
	| ISetUserLoading
	| IGetUserPlaylists
