import { createPlaylist } from './create-playlist'
import { getPlaylist } from './get-playlist'
import { getMorePlaylistTracks } from './get-playlist-tracks'

export const playlistsMiddlewares = [
	createPlaylist,
	getPlaylist,
	getMorePlaylistTracks
]
