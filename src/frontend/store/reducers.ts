import RouterReducers from './router/reducers'
import { combineReducers } from 'redux'
import { RouterStateShape } from './router/initial-state'

export type RootStateShape = {
	router: RouterStateShape
}

export default combineReducers({
	router: RouterReducers
})
