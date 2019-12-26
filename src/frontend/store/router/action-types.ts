import { RouterCurrRouteType } from './initial-state'

export const SET_CURRENT_ROUTE = '[router] SET_CURRENT_ROUTE'

interface SetCurrentRouterAction {
	type: typeof SET_CURRENT_ROUTE
	newRoute: RouterCurrRouteType
}

export type RouterActionTypes = SetCurrentRouterAction
