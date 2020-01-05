import { LazyExoticComponent, ReactNode } from 'react'
import {
	PlaylistObjectSimplified,
	AuthObject,
	User,
	PlaylistObjectFull,
	TrackObjectFull,
	AlbumObjectFull
} from './services'

export type RootStateShape = {
	router: RouterStateShape
	navigation: NavigationStateShape
	user: UserStateShape
	playlists: PlaylistsStateShape
	tracks: TracksStateShape
	albums: AlbumsStateShape
}

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
export type PlaylistTrackObject = SpotifyApi.PlaylistTrackObject
export type PagingTrackObject<T> = SpotifyApi.PagingObject<T> & {
	allLoaded?: boolean
}

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

export type PagingPlaylistObject<T> = SpotifyApi.PagingObject<T> & {
	allLoaded: boolean
}

export type UserStateShape = {
	auth: AuthObject
	profile: User | null
	isLoading: boolean
	currentUserPlaylists: PagingPlaylistObject<PlaylistObjectSimplified> | null
}

/**
 * Tracks
 */
export type TracksStateShape = {
	tracks: Record<string, TrackObjectFull>
}

/**
 * Albums
 */

export type AlbumsStateShape = {
	albums: Record<string, AlbumObjectFull>
}
