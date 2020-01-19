import { ADD_PLAYLISTS, GET_PLAYLISTS, REMOVE_PLAYLISTS } from './actions-types'
import { PlaylistObjectSimplified } from 'services'
import { PagingPlaylistObject } from 'redux-store'

export const addPlaylists = (
	playlistsPagging: PagingPlaylistObject<PlaylistObjectSimplified>
) => {
	return {
		type: ADD_PLAYLISTS,
		payload: {
			playlistsPagging
		}
	}
}

export const removePlaylists = () => {
	return {
		type: REMOVE_PLAYLISTS
	}
}

export const getPlaylists = () => {
	return {
		type: GET_PLAYLISTS
	}
}
