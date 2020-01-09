declare module 'services' {
	import { CancelTokenSource } from 'axios'
	import {
		PlaylistTrackObject,
		PagingTrackObject,
		PagingPlaylistObject
	} from 'redux-store'

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
			queryParams?: object,
			cancelToken?: CancelTokenSource
		): ServiceResponse<PagingPlaylistObject<PlaylistObjectSimplified>>
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

		getPlaylistTracks(
			playlistId: PlaylistObjectFull,
			cancelToken?: CancelTokenSource
		): ServiceResponse<PagingTrackObject<PlaylistTrackObject>>
	}

	/**
	 * Tracks service
	 */
	export interface ITracksService {
		getTrack(
			trackId: string,
			cancelToken?: CancelTokenSource
		): ServiceResponse<TrackObjectFull>
	}

	/**
	 * Album service
	 */
	export interface IAlbumsService {
		getAlbum(
			albumId: string,
			cancelToken?: CancelTokenSource
		): ServiceResponse<AlbumObjectFull>

		getAlbumTracks(
			album: AlbumObjectFull,
			cancelToken?: CancelTokenSource
		): ServiceResponse<PagingTrackObject<TrackObjectSimplified>>
	}
}
