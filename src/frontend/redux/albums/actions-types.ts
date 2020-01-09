import { AlbumObjectFull, TrackObjectSimplified } from 'services'
import { PagingTrackObject } from 'redux-store'

export const ADD_ALBUM = '[ tracks ] ADD_ALBUM'
export const REMOVE_ALBUM = '[ tracks ] REMOVE_ALBUM'
export const GET_ALBUM = '[ tracks ] GET_ALBUM'

export const ADD_TRACKS = '[ tracks ] ADD_TRACKS'
export const GET_ALBUM_TRACKS = '[ tracks ] GET_ALBUM_TRACKS'

interface IAddAlbum {
	type: typeof ADD_ALBUM
	payload: {
		album: AlbumObjectFull
	}
}

interface IRemoveAlbum {
	type: typeof REMOVE_ALBUM
	payload: {
		albumId: string
	}
}

interface IGetAlbum {
	type: typeof GET_ALBUM
	payload: {
		albumId: string
	}
}

interface IAddTracks {
	type: typeof ADD_TRACKS
	payload: {
		albumId: string
		trackObject: PagingTrackObject<TrackObjectSimplified>
	}
}

interface IGetAlbumTracks {
	type: typeof GET_ALBUM_TRACKS
	payload: {
		albumId: string
	}
}

export type albumsActionTypes =
	| IAddAlbum
	| IRemoveAlbum
	| IGetAlbum
	| IAddTracks
	| IGetAlbumTracks
