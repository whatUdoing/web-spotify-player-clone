import { getCurrentUserPlaylists } from './get-current-user-plylists'
import { newPlaylistCreated } from './new-playlist-created'

export const collectionMiddlewares = [
	getCurrentUserPlaylists,
	newPlaylistCreated
]
