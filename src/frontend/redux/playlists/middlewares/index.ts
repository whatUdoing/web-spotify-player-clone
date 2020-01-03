import { createPlaylist } from './create-playlist'
import { loadPlaylist } from './load-playlist'
import { loadMorePlaylistTracks } from './load-more-playlist-tracks'

export const playlistsMiddlewares = [createPlaylist, loadPlaylist]
