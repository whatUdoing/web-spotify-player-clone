import { Response } from 'types/http-client'
import { CancelTokenSource } from 'axios'

export interface IUserApiClient {
	isAuthenticated(cancelToken?: CancelTokenSource): Promise<Response>
	logout(): Promise<Response>
	getUserProfile(): Promise<Response>
	getUserDashboard(cancelToken?: CancelTokenSource): Promise<Response>
	getUserPlaylists(cancelToken?: CancelTokenSource): Promise<Response>
}

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
}
