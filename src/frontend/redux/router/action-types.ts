import { RouterCurrRouteType } from './reducers'

export const SET_CURRENT_ROUTE = '[router] SET_CURRENT_ROUTE'

interface ISetCurrentRouterAction {
	type: typeof SET_CURRENT_ROUTE
	playload: {
		newRoute: RouterCurrRouteType
	}
}

export type RouterActionTypes = ISetCurrentRouterAction
