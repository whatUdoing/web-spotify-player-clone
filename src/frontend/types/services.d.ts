import { CancelTokenSource } from 'axios'
import { PlaylistTrackObject } from './redux'

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

export type ImageObject = SpotifyApi.ImageObject
export type TrackObjectFull = SpotifyApi.TrackObjectFull
export type ArtistObjectFull = SpotifyApi.ArtistObjectFull
export type AlbumObjectFull = SpotifyApi.AlbumObjectFull

export type TrackObjectSimplified = SpotifyApi.TrackObjectSimplified
export type ArtistObjectSimplified = SpotifyApi.ArtistObjectSimplified
export type AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified

export type DashboardItemTypesObject =
	| PlaylistObjectSimplified
	| AlbumObjectSimplified
	| ArtistObjectSimplified
	| TrackObjectSimplified

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

	getUserPlaylists(
		cancelToken?: CancelTokenSource
	): ServiceResponse<SpotifyApi.PagingObject<PlaylistObjectSimplified>>
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
export type PlaylistObjectSimplified = SpotifyApi.PlaylistObjectSimplified
export type PlaylistObjectFull = SpotifyApi.PlaylistObjectFull

export interface IPlaylistsService {
	createPlaylist(
		playlistName: string,
		userId: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<PlaylistObjectFull>

	getPlaylist(
		playlistId: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<PlaylistObjectFull>

	getTracks(
		playlistId: string,
		queryParams?: string,
		cancelToken?: CancelTokenSource
	): ServiceResponse<SpotifyApi.PagingObject<PlaylistTrackObject>>
}
