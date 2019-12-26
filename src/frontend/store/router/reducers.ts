import { initialState } from './initial-state'
import { RouterActionTypes, SET_CURRENT_ROUTE } from './action-types'
import { combineReducers } from 'redux'

export const RoutesReducer = (
	routes = initialState.routes,
	action: RouterActionTypes
) => {
	// to implement when needed
	return routes
}

export const CurrRouterRecuders = (
	currentRoute = initialState.currentRoute,
	action: RouterActionTypes
) => {
	switch (action.type) {
		case SET_CURRENT_ROUTE: {
			return action.newRoute
		}

		default:
			return currentRoute
	}
}

export default combineReducers({
	routes: RoutesReducer,
	currentRoute: CurrRouterRecuders
})
