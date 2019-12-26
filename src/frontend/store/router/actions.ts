import { SET_CURRENT_ROUTE, RouterActionTypes } from './action-types'
import { RouterCurrRouteType } from './initial-state'

export const setCurrentRoute: (
	newRoute: RouterCurrRouteType
) => RouterActionTypes = (newRoute: RouterCurrRouteType) => {
	return {
		type: SET_CURRENT_ROUTE,
		newRoute
	}
}
