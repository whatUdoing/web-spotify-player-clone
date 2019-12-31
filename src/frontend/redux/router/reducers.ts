import { RouterActionTypes, SET_CURRENT_ROUTE } from './action-types'
import { combineReducers } from 'redux'
import { lazy } from 'react'
import { RouteObject } from 'types/router'

export type RouterCurrRouteType = number | null
export type RouterRoutesType = Record<string, RouteObject>

export type RouterStateShape = {
	routes: RouterRoutesType
	currentRoute: RouterCurrRouteType
	mainRoutes: Array<string>
}

export const initialState: RouterStateShape = {
	routes: {
		'1': {
			id: 1,
			path: '/',
			component: lazy(() => import('../../pages/home/home')),
			name: 'Home',
			exact: true
		},
		'2': {
			id: 2,
			path: '/search',
			component: lazy(() => import('../../pages/search')),
			name: 'Search'
		},
		'3': {
			id: 3,
			path: '/collection',
			component: lazy(() => import('../../pages/collections')),
			name: 'Your Library',
			withAuth: true,
			exact: true
		},
		'4': {
			id: 4,
			path: '/collection/:name',
			component: lazy(() => import('../../pages/collection')),
			name: 'Your Library',
			withAuth: true
		},
		'5': {
			id: 5,
			path: '/playlist/:id',
			component: lazy(() => import('../../pages/playlist')),
			name: 'playlist',
			withAuth: true
		},
		'6': {
			id: 6,
			path: '/settings/account',
			component: lazy(() => import('../../pages/account-settings')),
			name: 'Your Library',
			withAuth: true
		}
	},

	mainRoutes: ['1', '2', '3', '5', '6'],

	currentRoute: null
}

export const MainRoutesReducer = (
	mainRoutes = initialState.mainRoutes,
	action: RouterActionTypes
) => {
	// to implement when needed
	return mainRoutes
}

export const RoutesReducer = (
	routes = initialState.routes,
	action: RouterActionTypes
) => {
	// to implement when needed
	return routes
}

export const CurrRouterRecuder = (
	currentRoute = initialState.currentRoute,
	action: RouterActionTypes
) => {
	switch (action.type) {
		case SET_CURRENT_ROUTE: {
			return action.playload.newRoute
		}

		default:
			return currentRoute
	}
}

export default combineReducers({
	routes: RoutesReducer,
	currentRoute: CurrRouterRecuder,
	mainRoutes: MainRoutesReducer
})
