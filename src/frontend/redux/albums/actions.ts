import {
	ADD_ALBUM,
	REMOVE_ALBUM,
	GET_ALBUM,
	GET_ALBUM_TRACKS
} from './actions-types'
import { AlbumObjectFull, TrackObjectSimplified } from 'types/services'
import { PagingTrackObject } from 'types/redux'
import { ADD_TRACKS } from './actions-types'

export const addAlbum = (album: AlbumObjectFull) => {
	return {
		type: ADD_ALBUM,
		payload: {
			album
		}
	}
}

export const removeAlbum = (albumId: string) => {
	return {
		type: REMOVE_ALBUM,
		payload: {
			albumId
		}
	}
}

export const addTracks = (
	albumId: string,
	trackObject: PagingTrackObject<TrackObjectSimplified>
) => {
	return {
		type: ADD_TRACKS,
		payload: {
			albumId,
			trackObject
		}
	}
}

export const getAlbum = (albumId: string) => {
	return {
		type: GET_ALBUM,
		payload: {
			albumId
		}
	}
}

export const getAlbumTracks = (albumId: string) => {
	return {
		type: GET_ALBUM_TRACKS,
		payload: {
			albumId
		}
	}
}
