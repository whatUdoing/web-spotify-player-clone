import { getCurrentUserPlaylists } from './get-user-playlists'
import { userAuth } from './user-auth'
import { newPlaylistCreated } from './new-playlist-created'

export const userMiddlewares = [userAuth]
