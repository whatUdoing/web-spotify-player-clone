import { Middleware } from 'redux'
import { playlistsActionTypes } from 'redux/playlists/actions-types'
import { NEW_PLAYLIST_CREATED } from '../../playlists/actions-types'
import { getUserPlaylists } from '../actions'

export const newPlaylistCreated: Middleware = ({ dispatch }) => next => (
	action: playlistsActionTypes
) => {
	next(action)
	console.log(action.type)
	if (action.type === NEW_PLAYLIST_CREATED) {
		console.log('NEW_PLAYLIST_CREATED')
		dispatch(getUserPlaylists())
	}
}
