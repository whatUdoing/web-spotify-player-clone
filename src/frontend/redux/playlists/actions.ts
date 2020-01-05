import {
	CREATE_PLAYLIST,
	ADD_PLAYLIST,
	NEW_PLAYLIST_CREATED,
	GET_PLAYLIST,
	GET_PLAYLIST_TRACKS,
	ADD_TRACKS
} from './actions-types'
import { PlaylistObjectFull } from 'types/services'
import { PlaylistTrackObject, PagingTrackObject } from 'types/redux'

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

export const getPlaylistTracks = (playlistId: string) => {
	return {
		type: GET_PLAYLIST_TRACKS,
		payload: {
			playlistId
		}
	}
}

export const addTracks = (
	playlistId: string,
	trackObject: PagingTrackObject<PlaylistTrackObject>
) => {
	return {
		type: ADD_TRACKS,
		payload: {
			playlistId,
			trackObject
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
