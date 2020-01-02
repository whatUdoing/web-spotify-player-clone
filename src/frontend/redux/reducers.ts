import { combineReducers } from 'redux'

import RouterReducers from './router/reducers'
import NavigationReducers from './navigation/reducers'
import UserReducers, { UserStateShape } from './user/reducers'
import PlaylistsReducers from './playlists/reducers'
import {
	NavigationStateShape,
	PlaylistsStateShape,
	RouterStateShape
} from 'types/redux'

export type RootStateShape = {
	router: RouterStateShape
	navigation: NavigationStateShape
	user: UserStateShape
	playlists: PlaylistsStateShape
}

export default combineReducers({
	router: RouterReducers,
	navigation: NavigationReducers,
	user: UserReducers,
	playlists: PlaylistsReducers
})
