import { PlaylistObjectFull, PlaylistObjectSimplified } from 'types/services'

export const CREATE_PLAYLIST = '[ playlists ] CREATE_PLAYLIST'
export const SET_CURR_USER_PLAYLISTS = '[ playlists ] SET_CURR_USER_PLAYLISTS'
export const NEW_PLAYLIST_CREATED = '[ playlists ] NEW_PLAYLIST_CREATED'

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

interface IAddNewPlaylist {
	type: typeof SET_CURR_USER_PLAYLISTS
	payload: {
		playlistsPaging: SpotifyApi.PagingObject<PlaylistObjectSimplified>
	}
}

export type playlistsActionTypes =
	| ICreatePlaylist
	| IAddNewPlaylist
	| INewPlaylistCreated
