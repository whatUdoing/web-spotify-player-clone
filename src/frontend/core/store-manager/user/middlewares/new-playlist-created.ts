import { Middleware } from 'redux'
import {
	NEW_PLAYLIST_CREATED,
	playlistsActionTypes
} from '../../playlists/actions-types'
import { getCurrentUserPlaylists } from '../actions'

export const newPlaylistCreated: Middleware = ({ dispatch }) => next => (
	action: playlistsActionTypes
) => {
	next(action)

	if (action.type === NEW_PLAYLIST_CREATED) {
		dispatch(getCurrentUserPlaylists())
	}
}
