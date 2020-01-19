import { lazy } from 'react'
import RouteManager from '../core/components/router/route-manager/route-manager'
import { RouteObject } from 'router'

export const Routes: Array<RouteObject> = [
	{
		key: 'home',
		path: '/',
		component: lazy(() => import('../modules/user/pages/home/home')),
		name: 'Home',
		exact: true,
		mainNav: true,
		icon: 'fas fa-home'
	},
	{
		key: 'search',
		path: '/search',
		mainNav: true,
		component: lazy(() => import('../pages/search/search')),
		name: 'Search'
	},
	{
		key: 'collection',
		path: '/collection',
		component: RouteManager,
		name: 'Your Library',
		mainNav: true,
		routes: [
			{
				key: 'collection-index',
				path: '/collection',
				component: lazy(() =>
					import('../pages/collections/collections')
				),
				name: 'Your Library'
			},
			{
				key: 'collection',
				path: '/collection/:name',
				component: lazy(() => import('../pages/collection/collection')),
				name: 'Your Library'
			}
		]
	},
	{
		key: 'playlist',
		path: '/playlist/:playlistId',
		component: lazy(() => import('../modules/playlist/pages/playlist')),
		name: 'playlist',
		mainNav: false,
		withAuth: true
	},
	{
		key: 'account-settings',
		path: '/settings/account',
		component: lazy(() =>
			import('../modules/user/pages/account-settings/account-settings')
		),
		name: 'Your Library',
		mainNav: false,
		withAuth: true
	},
	{
		key: 'track',
		path: '/track/:trackId',
		component: lazy(() => import('../modules/track/pages/track')),
		name: 'track',
		mainNav: false,
		withAuth: true
	},
	{
		key: 'album',
		path: '/album/:albumId',
		component: lazy(() => import('../modules/album/pages/album')),
		name: 'album',
		mainNav: false,
		withAuth: true
	}
]
