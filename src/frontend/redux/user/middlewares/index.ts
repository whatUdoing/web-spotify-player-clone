import { getPlaylists } from './get-playlists'
import { userAuth } from './user-auth'
import { newPlaylistCreated } from './new-playlist-created'

export const userMiddlewares = [getPlaylists, userAuth, newPlaylistCreated]
