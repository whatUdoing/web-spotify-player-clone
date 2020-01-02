import {
	CREATE_PLAYLIST,
	SET_CURR_USER_PLAYLISTS,
	NEW_PLAYLIST_CREATED
} from './actions-types'
import { PlaylistObjectSimplified, PlaylistObjectFull } from 'types/services'

export const createPlaylist = (playlistName: string) => {
	return {
		type: CREATE_PLAYLIST,
		payload: {
			playlistName
		}
	}
}

export const setCurrUserPlaylists = (
	playlistsPaging: SpotifyApi.PagingObject<PlaylistObjectSimplified>
) => {
	return {
		type: SET_CURR_USER_PLAYLISTS,
		payload: {
			playlistsPaging
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
