import { RouterActionTypes, SET_CURRENT_ROUTE } from './action-types'
import { combineReducers } from 'redux'
import { lazy } from 'react'
import { RouterStateShape } from 'types/redux'

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
			component: lazy(() => import('../../pages/search/search')),
			name: 'Search'
		},
		'3': {
			id: 3,
			path: '/collection',
			component: lazy(() =>
				import('../../pages/collections/collections')
			),
			name: 'Your Library',
			withAuth: true,
			exact: true
		},
		'4': {
			id: 4,
			path: '/collection/:name',
			component: lazy(() => import('../../pages/collection/collection')),
			name: 'Your Library',
			withAuth: true
		},
		'5': {
			id: 5,
			path: '/playlist/:playlistId',
			component: lazy(() => import('../../pages/playlist/playlist')),
			name: 'playlist',
			withAuth: true
		},
		'6': {
			id: 6,
			path: '/settings/account',
			component: lazy(() =>
				import('../../pages/account-settings/account-settings')
			),
			name: 'Your Library',
			withAuth: true
		},
		'7': {
			id: 7,
			path: '/track/:trackId',
			component: lazy(() => import('../../pages/track/track')),
			name: 'track',
			withAuth: true
		},
		'8': {
			id: 8,
			path: '/album/:albumId',
			component: lazy(() => import('../../pages/album/album')),
			name: 'album',
			withAuth: true
		}
	},

	mainRoutes: ['1', '2', '3', '5', '6', '7', '8'],

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
