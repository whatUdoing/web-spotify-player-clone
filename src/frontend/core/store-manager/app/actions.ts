import { SET_AUTH, SET_CURRENT_USER, SET_APP_LOADING } from './actions-types'
import { AuthObject, PlaylistObjectSimplified } from 'services'
import { User } from 'services'
import { PagingPlaylistObject } from 'redux-store'

export const setAuth = (auth: AuthObject) => {
	return {
		type: SET_AUTH,
		payload: {
			auth
		}
	}
}

export const setAppLoading = (isLoading: boolean) => {
	return {
		type: SET_APP_LOADING,
		payload: {
			isLoading
		}
	}
}

export const setUserProfile = (user: User) => {
	return {
		type: SET_CURRENT_USER,
		payload: {
			user
		}
	}
}

export const getUserPlaylists = () => {
	return {
		type: GET_USER_PLAYLISTS
	}
}

export const setCurrUserPlaylists = (
	playlistsPaging: PagingPlaylistObject<PlaylistObjectSimplified>
) => {
	return {
		type: SET_CURR_USER_PLAYLISTS,
		payload: {
			playlistsPaging
		}
	}
}
