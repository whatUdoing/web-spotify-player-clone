import { lazy } from 'react'
import { Route } from 'types/router'

export type RouterCurrRouteType = number | null
export type RouterRoutesType = Array<Route>

export type RouterStateShape = {
	routes: RouterRoutesType
	currentRoute: RouterCurrRouteType
}

export const initialState: RouterStateShape = {
	routes: [
		{
			id: 1,
			path: '/',
			component: lazy(() => import('../../pages/home')),
			name: 'Home'
		},
		{
			id: 2,
			path: '/search',
			component: lazy(() => import('../../pages/search')),
			name: 'Search'
		},
		{
			id: 3,
			path: '/',
			component: lazy(() => import('../../pages/collection')),
			name: 'Your Library'
		},
		{
			id: 4,
			path: '/playlist/:id',
			component: lazy(() => import('../../pages/playlist')),
			name: 'playlist'
		}
	],
	currentRoute: null
}
