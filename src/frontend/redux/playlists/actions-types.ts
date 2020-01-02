import { PlaylistObjectFull, PlaylistObjectSimplified } from 'types/services'

export const CREATE_PLAYLIST = '[ playlists ] CREATE_PLAYLIST'
export const NEW_PLAYLIST_CREATED = '[ playlists ] NEW_PLAYLIST_CREATED'
export const ADD_PLAYLIST = '[ playlists ] ADD_PLAYLIST'

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

export type playlistsActionTypes =
	| ICreatePlaylist
	| INewPlaylistCreated
	| IAddPlaylist
