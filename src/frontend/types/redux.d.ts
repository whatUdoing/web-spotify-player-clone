import { LazyExoticComponent, ReactNode } from 'react'
import {
	PlaylistObjectSimplified,
	AuthObject,
	User,
	PlaylistObjectFull
} from './services'

/**
 * Navigation
 */
export type NavigationItem = {
	id: number
	to: string
	name: string
}

export type NavigationStateShape = {
	main: Array<number>
	playlist: Array<NavigationItem>
}

/**
 * Router
 */
export type RouteObject = {
	id: number
	path: string
	name: string
	component: LazyExoticComponent<() => JSX.Element> | ReactNode
	withAuth?: boolean
	exact?: boolean
}

export type RouterCurrRouteType = number | null
export type RouterRoutesType = Record<string, RouteObject>

export type RouterStateShape = {
	routes: RouterRoutesType
	currentRoute: RouterCurrRouteType
	mainRoutes: Array<string>
}

/**
 * Playlists
 */

export type PlaylistsStateShape = {
	playlists: Record<string, PlaylistObjectFull>
}

/**
 * User
 */

export type UserStateShape = {
	auth: AuthObject
	profile: User | null
	isLoading: boolean
	currentUserPlaylists: SpotifyApi.PagingObject<
		PlaylistObjectSimplified
	> | null
}
