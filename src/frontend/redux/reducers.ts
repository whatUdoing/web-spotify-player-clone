import { combineReducers } from 'redux'

import RouterReducers from './router/reducers'
import NavigationReducers from './navigation/reducers'
import UserReducers from './user/reducers'
import PlaylistsReducers from './playlists/reducers'

export default combineReducers({
	router: RouterReducers,
	navigation: NavigationReducers,
	user: UserReducers,
	playlists: PlaylistsReducers
})
