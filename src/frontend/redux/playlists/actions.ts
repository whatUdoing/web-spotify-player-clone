import {
	CREATE_PLAYLIST,
	ADD_PLAYLIST,
	NEW_PLAYLIST_CREATED,
	GET_PLAYLIST,
	GET_MORE_PLAYLIST_TRACKS
} from './actions-types'
import { PlaylistObjectFull } from 'types/services'

export const createPlaylist = (playlistName: string) => {
	return {
		type: CREATE_PLAYLIST,
		payload: {
			playlistName
		}
	}
}

export const addPlaylist = (playlist: PlaylistObjectFull) => {
	return {
		type: ADD_PLAYLIST,
		payload: {
			playlist
		}
	}
}

export const getPlaylist = (playlistId: string) => {
	return {
		type: GET_PLAYLIST,
		payload: {
			playlistId
		}
	}
}

export const getMorePlaylistTracks = (playlistId: string) => {
	return {
		type: GET_MORE_PLAYLIST_TRACKS,
		payload: {
			playlistId
		}
	}
}

export const newPlaylistCreated = (playlist: PlaylistObjectFull) => {
	return {
		type: NEW_PLAYLIST_CREATED,
		payload: {
			playlist
		}
	}
}
