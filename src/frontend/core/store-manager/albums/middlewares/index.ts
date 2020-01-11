import { getAlbum } from './get-album'
import { getAlbumTracks } from './get-album-tracks'

export const albumsMiddlewares = [getAlbum, getAlbumTracks]
