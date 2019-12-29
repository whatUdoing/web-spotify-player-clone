import { SET_CURRENT_ROUTE, RouterActionTypes } from './action-types'
import { RouterCurrRouteType } from './reducers'

export const setCurrentRoute: (
	newRoute: RouterCurrRouteType
) => RouterActionTypes = (newRoute: RouterCurrRouteType) => {
	return {
		type: SET_CURRENT_ROUTE,
		playload: {
			newRoute
		}
	}
}
