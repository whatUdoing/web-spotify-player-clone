import { PlaylistObjectFull, TrackObjectFull } from 'types/services'
import { PlaylistTrackObject, PagingTrackObject } from 'types/redux'

export const CREATE_PLAYLIST = '[ playlists ] CREATE_PLAYLIST'
export const NEW_PLAYLIST_CREATED = '[ playlists ] NEW_PLAYLIST_CREATED'

export const ADD_PLAYLIST = '[ playlists ] ADD_PLAYLIST'

export const GET_PLAYLIST = '[ playlists ] GET_PLAYLIST'
export const GET_PLAYLIST_TRACKS = '[ playlists ] GET_PLAYLIST_TRACKS'

export const ADD_TRACKS = '[ playlists ] ADD_TRACKS'

interface ICreatePlaylist {
	type: typeof CREATE_PLAYLIST
	payload: {
		playlistName: string
	}
}

interface INewPlaylistCreated {
	type: typeof NEW_PLAYLIST_CREATED
	payload: {
		playlist: PlaylistObjectFull
	}
}

interface IAddPlaylist {
	type: typeof ADD_PLAYLIST
	payload: {
		playlist: PlaylistObjectFull
	}
}

interface IGetPlaylistTracks {
	type: typeof GET_PLAYLIST_TRACKS
	payload: {
		playlistId: string
	}
}

interface IGetPLaylist {
	type: typeof GET_PLAYLIST
	payload: {
		playlistId: string
	}
}

interface IAddTracks {
	type: typeof ADD_TRACKS
	payload: {
		playlistId: string
		trackObject: PagingTrackObject
		allLoaded: boolean
	}
}

export type playlistsActionTypes =
	| ICreatePlaylist
	| INewPlaylistCreated
	| IAddPlaylist
	| IGetPLaylist
	| IGetPlaylistTracks
	| IAddTracks
