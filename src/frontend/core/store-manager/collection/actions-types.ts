import { PlaylistObjectSimplified } from 'services'
import { PagingPlaylistObject } from 'redux-store'

export const ADD_PLAYLISTS = '[ collection ] ADD_PLAYLISTS'
export const GET_PLAYLISTS = '[ collection ] GET_PLAYLISTS'
export const REMOVE_PLAYLISTS = '[ collection ] REMOVE_PLAYLISTS'

interface IAddPlaylists {
	type: typeof ADD_PLAYLISTS
	payload: {
		playlistsPagging: PagingPlaylistObject<PlaylistObjectSimplified>
	}
}

interface IGetPlaylists {
	type: typeof GET_PLAYLISTS
}

interface IRemovePlaylists {
	type: typeof REMOVE_PLAYLISTS
}

export type collectionActionTypes =
	| IAddPlaylists
	| IGetPlaylists
	| IRemovePlaylists
