import { combineReducers } from 'redux'

import RouterReducers, { RouterStateShape } from './router/reducers'
import NavigationReducers, { NavigationStateShape } from './navigation/reducers'
import UserReducers, { UserStateShape } from './user/reducers'

export type RootStateShape = {
	router: RouterStateShape
	navigation: NavigationStateShape
	user: UserStateShape
}

export default combineReducers({
	router: RouterReducers,
	navigation: NavigationReducers,
	user: UserReducers
})
