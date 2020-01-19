import { combineReducers } from 'redux'

import UserReducers from './user/reducers'
import PlaylistsReducers from './playlists/reducers'
import TracksReducers from './tracks/reducers'
import AlbumsReducers from './albums/reducers'
import CollectionReducers from './collection/reducers'

export default combineReducers({
	user: UserReducers,
	playlists: PlaylistsReducers,
	tracks: TracksReducers,
	albums: AlbumsReducers,
	collection: CollectionReducers
})
