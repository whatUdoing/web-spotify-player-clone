import {
	CREATE_PLAYLIST,
	ADD_PLAYLIST,
	NEW_PLAYLIST_CREATED
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

export const newPlaylistCreated = (playlist: PlaylistObjectFull) => {
	return {
		type: NEW_PLAYLIST_CREATED,
		payload: {
			playlist
		}
	}
}
