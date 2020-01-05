import {
	SET_USER_AUTH,
	SET_USER_LOADING,
	SET_USER_PROFILE,
	GET_USER_PLAYLISTS,
	SET_CURR_USER_PLAYLISTS
} from './actions-types'
import { AuthObject, PlaylistObjectSimplified } from 'types/services'
import { User } from 'types/services'
import { PagingPlaylistObject } from 'types/redux'

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
