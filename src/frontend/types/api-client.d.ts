import { Response } from 'types/http-client'
import { CancelTokenSource } from 'axios'

/**
 * User
 */
export interface IUserApiClient {
	isAuthenticated(cancelToken?: CancelTokenSource): Promise<Response>

	logout(): Promise<Response>

	getUserProfile(): Promise<Response>

	getUserDashboard(cancelToken?: CancelTokenSource): Promise<Response>

	getUserPlaylists(
		queryParams?: string,
		cancelToken?: CancelTokenSource
	): Promise<Response>
}

/**
 * Playlists
 */
export interface IPlaylistsApiClient {
	createPlaylist(
		playlistName: string,
		userId: string,
		cancelToken?: CancelTokenSource
	): Promise<Response>

	getPlaylist(
		playlistId: string,
		cancelToken?: CancelTokenSource
	): Promise<Response>

	getTracks(
		playlistId: string,
		queryParams?: object,
		cancelToken?: CancelTokenSource
	): Promise<Response>
}

/**
 * Tracks
 */
export interface ITracksApiClient {
	getTrack(
		trackId: string,
		cancelToken?: CancelTokenSource
	): Promise<Response>
}

/**
 * Album
 */
export interface IAlbumsApiClient {
	getAlbum(
		albumId: string,
		cancelToken?: CancelTokenSource
	): Promise<Response>

	getTracks(
		albumId: string,
		queryParams?: object,
		cancelToken?: CancelTokenSource
	): Promise<Response>
}
