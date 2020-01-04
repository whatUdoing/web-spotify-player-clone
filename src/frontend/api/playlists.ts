import { IPlaylistsApiClient } from 'types/api-client'
import { IHttpClient } from 'types/http-client'
import { CancelTokenSource } from 'axios'
import apiConfig from './config'

export default class PlaylistsApiClient implements IPlaylistsApiClient {
	httpClient: IHttpClient

	constructor(httpClient: IHttpClient) {
		this.httpClient = httpClient
	}

	createPlaylist(
		playlistName: string,
		userId: string,
		cancelToken?: CancelTokenSource
	) {
		return this.httpClient.post(
			`${apiConfig.apiPrefix}/users/${userId}/playlists`,
			{
				name: playlistName
			},
			{
				cancelToken: cancelToken ? cancelToken.token : undefined
			}
		)
	}

	getPlaylist(playlistId: string, cancelToken?: CancelTokenSource) {
		return this.httpClient.get(
			`${apiConfig.apiPrefix}/playlists/${playlistId}`,
			{
				cancelToken: cancelToken ? cancelToken.token : undefined
			}
		)
	}

	getTracks(
		playlistId: string,
		queryParams?: object,
		cancelToken?: CancelTokenSource
	) {
		return this.httpClient.get(
			`${apiConfig.apiPrefix}/playlists/${playlistId}/tracks`,
			{
				params: queryParams ?? null,
				cancelToken: cancelToken ? cancelToken.token : undefined
			}
		)
	}
}
