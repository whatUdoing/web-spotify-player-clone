import { CancelTokenSource } from 'axios'

/**
 * General services types
 */
export type ServiceResponse<T> = Promise<[T | null, Error | null]>

export type ServiceType = { [index: string]: Function } & (
	| IUserService
	| IPlaylistsService
)

/**
 * User service
 */

export type DashboardItemTypesObject =
	| SpotifyApi.PlaylistObjectSimplified
	| SpotifyApi.AlbumObjectSimplified
	| SpotifyApi.ArtistObjectSimplified
	| SpotifyApi.TrackObjectSimplified

export type MyDashboardResponse = {
	items: Array<MyDashboardPagingObject>
}

export type DashboardItemTypes = 'playlist' | 'album' | 'artist' | 'track'
export type MyDashboardPagingObject = SpotifyApi.PagingObject<
	DashboardItemTypesObject
> & {
	title: string
	type: string
}

export interface IUserService {
	isAuthenticated(
		cancelToken?: CancelTokenSource
	): ServiceResponse<AuthObject>

	getUserProfile(): ServiceResponse<User>

	logout(): ServiceResponse<boolean>

	getUserDashboard(
		cancelToken?: CancelTokenSource
	): ServiceResponse<MyDashboardResponse>
}

/**
 * todo: change to specific object shape
 */
export type User = SpotifyApi.UserObjectPrivate

export type AuthObject = {
	isAuth: boolean
	expiresIn?: number
}

/**
 * PLaylist service
 */
export type PlaylistObject = SpotifyApi.PlaylistObjectSimplified

export interface IPlaylistsService {
	getDashboardPlaylists(): Array<PlaylistObject>
	getPlaylist(playlistId: string): PlaylistObject
	addPlaylist(playlistName: string): void
	removePlaylist(playlistId: string): void
}
