import { getUserPlaylists } from './get-user-playlists'
import { userAuth } from './user-auth'
import { newPlaylistCreated } from './new-playlist-created'

export const userMiddlewares = [getUserPlaylists, userAuth, newPlaylistCreated]
